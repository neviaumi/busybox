import { describe, it } from 'node:test';
import assert from 'node:assert';
import linkTitleToIssue from './link-title-to-issue.js';

describe('rule: link-title-to-issue', () => {
  function createParsed(header) {
    return {
      header,
    };
  }

  it('return error if commit header not started with ISSUE or GH', () => {
    const [rulePass, failureReason] = linkTitleToIssue(
      createParsed('test: test'),
      null,
    );
    assert.strictEqual(rulePass, false);
    assert.strictEqual(
      failureReason,
      'commit header (test: test) must start with (ISSUE|GH)-{Issue Id}, example: (ISSUE|GH)-1234: your commit message',
    );
  });

  it('return error if commit header not separate after issue', () => {
    const [rulePass, failureReason] = linkTitleToIssue(
      createParsed('ISSUE-1234 test'),
      null,
    );
    assert.strictEqual(rulePass, false);
    assert.strictEqual(
      failureReason,
      "commit header (ISSUE-1234 test) must contain ': ' after ISSUE-1234, example: ISSUE-1234: your commit message",
    );
  });

  it('return error if commit message empty', () => {
    const [rulePass, failureReason] = linkTitleToIssue(
      createParsed('ISSUE-1234: '),
      null,
    );
    assert.strictEqual(rulePass, false);
    assert.strictEqual(
      failureReason,
      'commit header (ISSUE-1234: ) must contain message after ISSUE-1234: , example: ISSUE-1234: your commit message',
    );
  });

  it('return true if commit message start with issue key, contain separator and have message after', () => {
    ['ISSUE-1234: commit message', 'GH-1234: commit message'].forEach(
      header => {
        const [rulePass] = linkTitleToIssue(createParsed(header), null);
        assert.strictEqual(rulePass, true);
      },
    );
  });

  it('able to configure issue prefix by setting option issuePrefix', () => {
    const [rulePass] = linkTitleToIssue(
      createParsed('CUSTOM-1234: commit message'),
      null,
      { issuePrefix: 'CUSTOM' },
    );
    assert.strictEqual(rulePass, true);
  });

  it('able to configure separator by setting option separator', () => {
    const [rulePass] = linkTitleToIssue(
      createParsed('ISSUE-1234 commit message'),
      null,
      { separator: ' ' },
    );
    assert.strictEqual(rulePass, true);
  });
});
