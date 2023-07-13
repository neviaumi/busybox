import type { Plugin } from '@commitlint/types';

const commitLintPlugin: Plugin = {
  rules: {
    'linking-to-github-issue': parsed => {
      // https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword
      const bodyRegex =
        /^this (close|closes|closed|fix|fixes|fixed|resolve|resolves|resolved) #(?<issueId>\d+)$/i;
      const headerRegex = /^ISSUE-(?<issueId>\d+): .*$/;
      const { body, footer, header } = parsed;
      const messageBody = body || footer;
      const isValid = messageBody !== null && bodyRegex.test(messageBody);
      if (!isValid) {
        return [
          isValid,
          `commit message body (${messageBody}) doest not match with pattern : ${bodyRegex}`,
        ];
      }
      const bodyIssueId = messageBody.match(bodyRegex)?.groups?.['issueId'];
      const headerIssueId = header.match(headerRegex)?.groups?.['issueId'];

      return [
        bodyIssueId === headerIssueId,
        `issue id ${bodyIssueId} specific in body not equal to ${headerIssueId} in header`,
      ];
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default commitLintPlugin;
