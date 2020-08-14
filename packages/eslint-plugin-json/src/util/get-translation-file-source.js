const path = require('path');

const isJSONFile = context => path.extname(context.getFilename()) === '.json';

const INVALID_SOURCE = {
  source: null,
  sourceFilePath: null,
  valid: false,
};

module.exports = ({ context }) => {
  if (!isJSONFile(context)) {
    // is not a json file or the file
    // has not been through the plugin preprocessor
    return INVALID_SOURCE;
  }

  const source = context.getSourceCode().text;

  // valid source
  return {
    source: source && source.trim(),
    valid: true,
  };
};
