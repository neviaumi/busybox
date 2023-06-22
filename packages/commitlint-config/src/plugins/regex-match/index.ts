import type { Plugin } from '@commitlint/types';

const commitLintPlugin: Plugin = {
  rules: {
    'body-match': (parsed, _, regex) => {
      const { body, footer } = parsed;
      const messageBody = body || footer;
      if (!regex) {
        return [true];
      }
      const isValid =
        messageBody !== null && new RegExp(regex, 'ig').test(messageBody);

      return [
        isValid,
        `commit message body (${messageBody}) doest not match with pattern : ${regex}`,
      ];
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default commitLintPlugin;
