import { defaultConfig } from './configurations.js';
import { parseIssueFromHeader } from './link-title-to-issue.js';

const linkBodyToIssue = (parsed, _, value) => {
  const { issuePrefix = defaultConfig.issuePrefix } = value || {};
  const issuePrefixRegex = `(${issuePrefix.map(i => i + '-').join('|')}|#)`;
  // https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword
  const bodyRegex = new RegExp(
    `^(this (close|closes|closed|fix|fixes|fixed|resolve|resolves|resolved) )?${issuePrefixRegex}(?<issueId>\\d+)$`,
    'i',
  );
  const { body, footer, header, raw } = parsed;
  let messageBody = body || footer;
  if (!messageBody) {
    messageBody = raw
      .split('\n')
      .filter(line => line.trim())
      .filter(line => line.length > 0)[1];
  }
  const isValid = messageBody !== null && bodyRegex.test(messageBody);
  if (!isValid) {
    return [
      isValid,
      `commit message body (${messageBody}) doest not match with pattern : ${bodyRegex}`,
    ];
  }
  const bodyIssueId = messageBody.match(bodyRegex)?.groups?.['issueId'];
  const { issueId: headerIssueId } =
    parseIssueFromHeader(header, `(${issuePrefix.join('|')})`) || {};

  return [
    bodyIssueId === headerIssueId,
    `issue id ${bodyIssueId} specific in body not equal to ${headerIssueId} in header`,
  ];
};

export default linkBodyToIssue;
