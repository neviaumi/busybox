const { CLIEngine } = require('eslint');

describe('Test @busybox/eslint-plugin-json', () => {
  it('Test lint json', async () => {
    const cli = new CLIEngine();
    const {
      results: [sortedJSONResult, unsortedJSONResult],
    } = cli.executeOnFiles([
      `${__dirname}/__fixtures__/sorted.json`,
      `${__dirname}/__fixtures__/unsorted.json`,
    ]);
    expect(sortedJSONResult.errorCount).toEqual(0);
    expect(unsortedJSONResult.errorCount).toEqual(1);
  });
});
