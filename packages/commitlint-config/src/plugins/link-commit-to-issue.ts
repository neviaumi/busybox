import type { Plugin } from '@commitlint/types';
import linkBodyToIssue from './rules/link-body-to-issue.ts';
import linkTitleToIssue from './rules/link-title-to-issue.ts';

const linkCommitToIssue: Plugin = {
  rules: {
    'link-body-to-issue': linkBodyToIssue,
    'link-title-to-issue': linkTitleToIssue,
  },
};

export default linkCommitToIssue;
