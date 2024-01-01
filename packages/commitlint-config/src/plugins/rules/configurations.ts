export type ruleConfig = {
  issuePrefix?: string;
  separator?: string;
};

export const ISSUE_PREFIX = '(ISSUE|GH)';
export const SEPARATOR = ': ';

export const defaultConfig = {
  issuePrefix: ISSUE_PREFIX,
  separator: SEPARATOR,
};
