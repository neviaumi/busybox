import { defaultConfig } from './configurations.js';

export function parseIssueFromHeader(header, issuePrefix) {
  const issue = header.match(new RegExp(`^(?<issue>${issuePrefix}-\\d+)`))
    ?.groups?.['issue'];
  if (!issue) {
    return null;
  }
  return { issue, issueId: issue.split('-')[1].trim() };
}

const linkTitleToIssue = (parsed, _, value) => {
  const {
    checkIssueAlignedWithBranchName = defaultConfig.checkIssueAlignedWithBranchName,
    currentBranch = defaultConfig.currentBranch,
    issueNumber = defaultConfig.issueNumber,
    issuePrefix = defaultConfig.issuePrefix,
    separator = defaultConfig.separator,
  } = value || {};
  const issuePrefixRegex = `(${issuePrefix.join('|')})`;
  const { header } = parsed;
  const isHeaderStartWithIssuePrefix = new RegExp(
    `^(?<issue>${issuePrefixRegex}-\\d+)`,
  ).test(header);
  if (!isHeaderStartWithIssuePrefix) {
    return [
      false,
      `commit header (${header}) must start with ${issuePrefixRegex}-{Issue Id}, example: ${issuePrefixRegex}-1234${separator}your commit message`,
    ];
  }
  const { issue, issueId } = parseIssueFromHeader(header, issuePrefixRegex);
  const isHeaderContainSeparator = new RegExp(
    `^(?<issue>${issuePrefixRegex}-\\d+)${separator}`,
  ).test(header);
  if (!isHeaderContainSeparator) {
    return [
      false,
      `commit header (${header}) must contain '${separator}' after ${issue}, example: ${issue}${separator}your commit message`,
    ];
  }
  const isHeaderContainMessage = new RegExp(
    `^(?<issue>${issuePrefixRegex}-\\d+)${separator}(?<message>[a-zA-Z-0-9][a-zA-Z-0-9 ]+)`,
  ).test(header);
  if (!isHeaderContainMessage) {
    return [
      false,
      `commit header (${header}) must contain message after ${issue}${separator}, example: ${issue}${separator}your commit message`,
    ];
  }
  if (checkIssueAlignedWithBranchName && issueNumber !== issueId) {
    return [
      false,
      `Issue id (${issueId})  on commit header (${header}) must have same issue id (${issueNumber}) that configurate on branch name "${currentBranch}"`,
    ];
  }

  return [true, 'All good!'];
};

export default linkTitleToIssue;
