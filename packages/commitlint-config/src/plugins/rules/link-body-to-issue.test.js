import assert from 'node:assert';
import { describe, it } from 'node:test';

import linkBodyToIssue from './link-body-to-issue.js';

describe('rule: link-body-to-issue', () => {
  function createParsed({ body, footer, header }) {
    return {
      body,
      footer,
      header,
    };
  }

  it('return true when body have linking keyword and issue is match to header', () => {
    const [rulePass, failureReason] = linkBodyToIssue(
      createParsed({
        body: 'this close #1234',
        header: 'GH-1234: what is that',
      }),
      null,
    );
    assert.strictEqual(rulePass, true, failureReason);
  });

  it('return false when body have linking keyword but mismatch issue id to header', () => {
    const [rulePass, failureReason] = linkBodyToIssue(
      createParsed({
        body: 'this close #1234',
        header: 'GH-4321: what is that',
      }),
      null,
    );
    assert.strictEqual(
      failureReason,
      'issue id 1234 specific in body not equal to 4321 in header',
    );
    assert.strictEqual(rulePass, false);
  });

  it("return true when body don't have linking keyword but have commit message", () => {
    ['#1234', 'GH-1234'].forEach(body => {
      const [rulePass, failureReason] = linkBodyToIssue(
        createParsed({ body: body, header: 'GH-1234: what is that' }),
        null,
      );
      assert.strictEqual(rulePass, true, failureReason);
    });
  });
});
