import {readPackageUp} from 'read-package-up';
import {promises as fs} from "node:fs"
import {path} from "ramda"
const {packageJson, projectPath} = await readPackageUp({
  cwd: process.cwd(),
});

export async function hasConfig(config) {
  return config.some((c) => {
    if (c.type === 'dependency') {
      const dependencyType = c.dependencyType || 'prod';
      const dependencyKey = {
        dev: 'devDependencies',
        peer: 'peerDependencies',
        prod: 'dependencies',
      }[dependencyType]
      return packageJson[dependencyKey]?.[c.dependency] !== undefined;
    } else if (c.type === 'file') {
      return fs.access(`${projectPath}/${c.pattern}`, fs.constants.R_OK).then(() => true).catch(() => false)
    } else if (c.type === 'package.json') {
      const {property, value} = c
      return path(property, packageJson)  === value
    }
    return false;
  });
}