import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['jira'],
  plugins: ['commitlint-plugin-jira-rules'],
  rules: {
    'jira-task-id-max-length': [2, 'always', 5 + 1 + 6],
    'jira-task-id-project-key': [2, 'always', 'ISSUE'],
  },
};

// eslint-disable-next-line import/no-default-export
export default Configuration;
module.exports = Configuration;
