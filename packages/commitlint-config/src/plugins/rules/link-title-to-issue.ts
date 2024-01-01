import type { Commit, Rule } from '@commitlint/types';
import { defaultConfig, type ruleConfig } from './configurations.ts';

const linkTitleToIssue: Rule<ruleConfig> = (parsed: Commit, _, value) => {
  const {
    issuePrefix = defaultConfig.issuePrefix,
    separator = defaultConfig.separator,
  } = value || {};
  const { header } = parsed;
  const isHeaderStartWithIssuePrefix = new RegExp(
    `^(?<issue>${issuePrefix}-\\d+)`,
  ).test(header);
  if (!isHeaderStartWithIssuePrefix) {
    return [
      false,
      `commit header (${header}) must start with ${issuePrefix}-{Issue Id}, example: ${issuePrefix}-1234${separator} your commit message`,
    ];
  }
  const issueId = header.match(new RegExp(`^(?<issue>${issuePrefix}-\\d+)`))
    ?.groups?.['issue'];
  const isHeaderContainSeparator = new RegExp(
    `^(?<issue>${issuePrefix}-\\d+)${separator}`,
  ).test(header);
  if (!isHeaderContainSeparator) {
    return [
      false,
      `commit header (${header}) must contain '${separator}' after ${issueId}, example: ${issueId}${separator}your commit message`,
    ];
  }
  const isHeaderContainMessage = new RegExp(
    `^(?<issue>${issuePrefix}-\\d+)${separator}(?<message>[a-zA-Z-0-9][a-zA-Z-0-9 ]+)`,
  ).test(header);
  if (!isHeaderContainMessage) {
    return [
      false,
      `commit header (${header}) must contain message after ${issueId}${separator}, example: ${issueId}${separator}your commit message`,
    ];
  }

  return [true, 'All good!'];
};

export default linkTitleToIssue;
