import type { UserConfig } from '@commitlint/types';

import linkCommitToIssue from './plugins/link-commit-to-issue.ts';

const Configuration: UserConfig = {
  plugins: [linkCommitToIssue],
  rules: {
    'link-body-to-issue': [2, 'always'],
    'link-title-to-issue': [2, 'always'],
  },
};
export default Configuration;
