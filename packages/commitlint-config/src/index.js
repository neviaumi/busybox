import linkCommitToIssue from './plugins/link-commit-to-issue.js';

const Configuration = {
  plugins: [linkCommitToIssue],
  rules: {
    'link-body-to-issue': [2, 'always'],
    'link-title-to-issue': [2, 'always'],
  },
};
export default Configuration;
