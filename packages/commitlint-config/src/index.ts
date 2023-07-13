import type { UserConfig } from '@commitlint/types';

import regexMatch from './plugins/regex-match/index.js';

const Configuration: UserConfig = {
  extends: ['jira'],
  plugins: ['commitlint-plugin-jira-rules', regexMatch],
  rules: {
    'jira-task-id-max-length': [2, 'always', 5 + 1 + 6],
    'jira-task-id-project-key': [2, 'always', 'ISSUE'],
    'linking-to-github-issue': [2, 'always'],
  },
};

module.exports = Configuration;
exports.default = Configuration;
