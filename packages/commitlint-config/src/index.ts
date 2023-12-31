import type { UserConfig } from '@commitlint/types';

import linkBodyToIssue from './plugins/link-body-to-issue.ts';

const Configuration: UserConfig = {
  extends: ['jira'],
  plugins: ['commitlint-plugin-jira-rules', linkBodyToIssue],
  rules: {
    'jira-task-id-max-length': [2, 'always', 5 + 1 + 6],
    'jira-task-id-project-key': [2, 'always', 'ISSUE'],
    'link-body-to-issue': [2, 'always'],
  },
};
export default Configuration;
