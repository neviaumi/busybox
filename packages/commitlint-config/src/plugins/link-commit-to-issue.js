import linkBodyToIssue from './rules/link-body-to-issue.js';
import linkTitleToIssue from './rules/link-title-to-issue.js';

const linkCommitToIssue = {
  rules: {
    'link-body-to-issue': linkBodyToIssue,
    'link-title-to-issue': linkTitleToIssue,
  },
};

export default linkCommitToIssue;
