import {readPackageUp} from "read-package-up";
const {packageJson, projectPath} = await readPackageUp({
    cwd: process.cwd(),
});

export async function readClosestPackageJson() {
    return {
        packageJson, projectPath
    }
}

export default {
    readClosestPackageJson: async () => {
        return {
            packageJson, projectPath
        }
    }
}