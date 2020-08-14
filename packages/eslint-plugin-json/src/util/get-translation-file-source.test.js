const getTranslationFileSource = require('./get-translation-file-source');

const INVALID_FILE_SOURCE = {
  source: null,
  sourceFilePath: null,
  valid: false,
};

describe('#getTranslationFileSource', () => {
  it("will return an invalid file source object if the file's extension is not .json", () => {
    const context = {
      getFilename: jest.fn().mockReturnValueOnce('file.js'),
    };
    const node = {};
    expect(getTranslationFileSource({ context, node })).toEqual(
      INVALID_FILE_SOURCE,
    );
  });

  it('will return a valid trimmed file source if the source is a json file and it was processed by plugin preprocessor', () => {
    const context = {
      getFilename: jest.fn().mockReturnValueOnce('file.json'),
      getSourceCode: jest.fn().mockReturnValueOnce({
        text: `json source
json source`,
      }),
    };

    expect(getTranslationFileSource({ context })).toEqual({
      source: `json source
json source`,
      valid: true,
    });
  });
});
