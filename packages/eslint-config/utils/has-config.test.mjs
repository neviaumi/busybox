import {describe, it} from "node:test"
import assert from "node:assert"
import {dirname, basename} from "node:path"

describe('has config', () => {
    it('should mock package json', async (t) => {
        const {default : packageJSON} = await import("./package-json.mjs")
        const mock = t.mock.method(packageJSON, 'readClosestPackageJson',() =>  {
            return Promise.resolve({
                packageJson: {type: 'module'}
        })});
        const {hasConfig} = await import('./has-config.mjs')
        const hasTypeModule = await hasConfig([{type: 'package.json', property: ['type'], value: 'module'}])
        assert.strictEqual(hasTypeModule, true, 'should be true')
    })

    describe('check package json contain dependency', () => Promise.all([{
        dependencyType: 'prod',
        dependencyKey: 'dependencies'
    },
        {
            dependencyType: 'dev',
            dependencyKey: 'devDependencies'
        },
        {
            dependencyType: 'peer',
            dependencyKey: 'peerDependencies'
        }].map(({dependencyType,dependencyKey})=> it(`should able to check package json contain react in ${dependencyType} dependency`, async (t) => {
        const {default : packageJSON} = await import("./package-json.mjs")
        t.mock.method(packageJSON, 'readClosestPackageJson',() =>  {
            return Promise.resolve({
                packageJson: {[dependencyKey]: {
                    react: '17.0.2'
                    }}
        })});
        const {hasConfig} = await import('./has-config.mjs')
        const hasDependency = await hasConfig([{type: 'dependency', dependencyType , dependency: 'react'}])
        assert.strictEqual(hasDependency, true, `should return true when package json contain react in ${dependencyType} dependency`)
    }))))

    it('should able to check file exist', async (t) => {
        const {default : packageJSON} = await import("./package-json.mjs")
        const currentFilePath = new URL(import.meta.url)
        const [currentFileDir, currentFileName] = [dirname(currentFilePath.pathname), basename(currentFilePath.pathname)]
        t.mock.method(packageJSON, 'readClosestPackageJson',() =>  {
            return Promise.resolve({
                packageJson: {dependencies: {
                        react: '17.0.2'
                    }},
                projectPath: currentFileDir
            })});
        const {hasConfig} = await import('./has-config.mjs')
        const hasFile = await hasConfig([{type: 'file', pattern: currentFileName}])
        assert.strictEqual(hasFile, true, `should return true when directory contain ${currentFileName} file`)
    })

    it('should able to property value in package json', async (t) => {
        const {default : packageJSON} = await import("./package-json.mjs")
        const currentFilePath = new URL(import.meta.url)
        const [currentFileDir, currentFileName] = [dirname(currentFilePath.pathname), basename(currentFilePath.pathname)]
        t.mock.method(packageJSON, 'readClosestPackageJson',() =>  {
            return Promise.resolve({
                packageJson: {dependencies: {
                        react: '17.0.2'
                    }},
                projectPath: currentFileDir
            })});
        const {hasConfig} = await import('./has-config.mjs')
        const hasFile = await hasConfig([{type: 'file', pattern: currentFileName}])
        assert.strictEqual(hasFile, true, `should return true when directory contain ${currentFileName} file`)
    })
})