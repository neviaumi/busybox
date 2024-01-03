import { describe, it } from 'node:test';
import assert from 'node:assert';
import linkBodyToIssue from './link-body-to-issue.js';

describe('rule: link-body-to-issue', () => {
  function createParsed({ body, footer, header }) {
    return {
      header,
      body,
      footer,
    };
  }

  it('return true when body have linking keyword and issue is match to header', () => {
    const [rulePass, failureReason] = linkBodyToIssue(
      createParsed({
        header: 'ISSUE-1234: what is that',
        body: 'this close #1234',
      }),
      null,
    );
    assert.strictEqual(rulePass, true);
  });

  it('return false when body have linking keyword but mismatch issue id to header', () => {
    const [rulePass, failureReason] = linkBodyToIssue(
      createParsed({
        header: 'ISSUE-4321: what is that',
        body: 'this close #1234',
      }),
      null,
    );
    assert.strictEqual(rulePass, false);
    assert.strictEqual(
      failureReason,
      'issue id 1234 specific in body not equal to 4321 in header',
    );
  });

  it("return false when body don't have linking keyword", () => {
    const [rulePass, failureReason] = linkBodyToIssue(
      createParsed({ header: 'ISSUE-4321: what is that', body: '#1234' }),
      null,
    );
    assert.strictEqual(rulePass, false);
    assert.strictEqual(
      failureReason,
      'commit message body (#1234) doest not match with pattern : /^this (close|closes|closed|fix|fixes|fixed|resolve|resolves|resolved) #(?<issueId>\\d+)$/i',
    );
  });
});
