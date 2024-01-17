import assert from 'node:assert';
import { basename, dirname } from 'node:path';
import { describe, it } from 'node:test';

describe('has config', () => {
  it('should mock package json', async () => {
    const { hasConfig } = await import('./has-config.mjs');
    const hasTypeModule = await hasConfig([
      { property: ['type'], type: 'package.json', value: 'module' },
    ]);
    assert.strictEqual(hasTypeModule, true, 'should be true');
  });

  describe('check package json contain dependency', () =>
    Promise.all(
      [
        {
          dependencyKey: 'dependencies',
          dependencyType: 'prod',
        },
        {
          dependencyKey: 'devDependencies',
          dependencyType: 'dev',
        },
        {
          dependencyKey: 'peerDependencies',
          dependencyType: 'peer',
        },
      ].map(({ dependencyKey, dependencyType }) =>
        it(`should able to check package json contain react in ${dependencyType} dependency`, async t => {
          const { default: packageJSON } = await import('./package-json.mjs');
          t.mock.method(packageJSON, 'readClosestPackageJson', () => {
            return Promise.resolve({
              packageJson: {
                [dependencyKey]: {
                  react: '17.0.2',
                },
              },
            });
          });
          const { hasConfig } = await import('./has-config.mjs');
          const hasDependency = await hasConfig([
            { dependency: 'react', dependencyType, type: 'dependency' },
          ]);
          assert.strictEqual(
            hasDependency,
            true,
            `should return true when package json contain react in ${dependencyType} dependency`,
          );
        }),
      ),
    ));

  it('should able to check file exist', async t => {
    const { default: packageJSON } = await import('./package-json.mjs');
    const currentFilePath = new URL(import.meta.url);
    const [currentFileDir, currentFileName] = [
      dirname(currentFilePath.pathname),
      basename(currentFilePath.pathname),
    ];
    t.mock.method(packageJSON, 'readClosestPackageJson', () => {
      return Promise.resolve({
        packageJson: {
          dependencies: {
            react: '17.0.2',
          },
        },
        projectPath: currentFileDir,
      });
    });
    const { hasConfig } = await import('./has-config.mjs');
    const hasFile = await hasConfig([
      { pattern: currentFileName, type: 'file' },
    ]);
    assert.strictEqual(
      hasFile,
      true,
      `should return true when directory contain ${currentFileName} file`,
    );
  });

  it('should able to property value in package json', async t => {
    const { default: packageJSON } = await import('./package-json.mjs');
    const currentFilePath = new URL(import.meta.url);
    const [currentFileDir, currentFileName] = [
      dirname(currentFilePath.pathname),
      basename(currentFilePath.pathname),
    ];
    t.mock.method(packageJSON, 'readClosestPackageJson', () => {
      return Promise.resolve({
        packageJson: {
          dependencies: {
            react: '17.0.2',
          },
        },
        projectPath: currentFileDir,
      });
    });
    const { hasConfig } = await import('./has-config.mjs');
    const hasFile = await hasConfig([
      { pattern: currentFileName, type: 'file' },
    ]);
    assert.strictEqual(
      hasFile,
      true,
      `should return true when directory contain ${currentFileName} file`,
    );
  });
});
