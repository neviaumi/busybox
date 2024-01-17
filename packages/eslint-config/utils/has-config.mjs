import { promises as fs } from 'node:fs';

import { path } from 'ramda';

import packageJsonMod from './package-json.mjs';

export async function hasConfig(config) {
  const { packageJson, projectPath } =
    await packageJsonMod.readClosestPackageJson();
  for (const c of config) {
    if (c.type === 'dependency') {
      const dependencyType = c.dependencyType || 'prod';
      const dependencyKey = {
        dev: 'devDependencies',
        peer: 'peerDependencies',
        prod: 'dependencies',
      }[dependencyType];
      if (path([dependencyKey, c.dependency], packageJson) !== undefined) {
        return true;
      }
    } else if (c.type === 'file') {
      try {
        await fs.access(`${projectPath}/${c.pattern}`, fs.constants.R_OK);
        return true;
      } catch (err) {
        return false;
      }
    } else if (c.type === 'package.json') {
      const { property, value } = c;
      if (path(property, packageJson) === value) {
        return true;
      }
    }
  }
  return false;
}
