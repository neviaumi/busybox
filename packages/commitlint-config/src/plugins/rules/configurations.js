import child_process from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(child_process.exec);

const currentBranch = await exec('git branch --show-current')
  .then(r => {
    const currentBranch = r.stdout.trim();
    return currentBranch;
  })
  .catch(() => null);

const issueNumber = (branchName => {
  if (!branchName.startsWith('GH')) return null;
  try {
    return branchName.split('-')[1].split('_')[0];
  } catch {
    throw new Error(
      'Branch have to be a format GH-[issueNumber]_[name] when it started with GH',
    );
  }
})(currentBranch);

export const ISSUE_PREFIX = ['GH'];
export const SEPARATOR = ': ';

export const defaultConfig = {
  checkIssueAlignedWithBranchName: issueNumber !== null,
  currentBranch,
  issueNumber: issueNumber,
  issuePrefix: ISSUE_PREFIX,
  separator: SEPARATOR,
};
