
export const typescriptJSXFileSuffixes = ['tsx', 'mtsx', 'ctsx'];
export const jsJSXFileSuffixes = ['jsx', 'mjsx', 'cjsx'];
export const typescriptFileSuffixes = ['ts', 'mts', 'cts', ...typescriptJSXFileSuffixes];
export const jsFileSuffixes = ['js', 'cjs', 'mjs', ...jsJSXFileSuffixes];

export const typescriptTestFilePatterns = typescriptFileSuffixes.map(ext => [`*.test.${ext}`, `*.spec.${ext}`])
    .flat();
export const jsTestFilePatterns =  jsFileSuffixes
    .map(ext => [`*.test.${ext}`, `*.spec.${ext}`])
    .flat();

export const jsJSXTestFilePatterns = jsJSXFileSuffixes.map(ext => [`*.test.${ext}`, `*.spec.${ext}`]).flat();
export const typescriptJSXTestFilePattern = typescriptJSXFileSuffixes.map(ext => [`*.test.${ext}`, `*.spec.${ext}`]).flat();