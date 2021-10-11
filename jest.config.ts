import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname)
const srcDir = resolve(rootDir, 'src')

export default {
  collectCoverageFrom: [
    '<rootDir>/**/*.js',
    '!**/__tests__/**',
    '!**/*.spec.js'
  ],
  coverageDirectory: resolve(rootDir, 'coverage'),
  coverageReporters: ['text'],
  projects: [
    {
      displayName: {
        name: '[Methods]',
        color: 'blueBright'
      },
      rootDir: srcDir,
      testEnvironment: 'node',
      testMatch: ['<rootDir>/**/*.test.js']
    },
    {
      displayName: {
        name: '[Components]',
        color: 'blue'
      },
      moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': resolve(srcDir, '__mocks__/style-mock.js'),
        '\\.png$': resolve(srcDir, '__mocks__/file-mock.js'),
        '\\.svg$': resolve(srcDir, '__mocks__/svg-mock.js')
      },
      rootDir: srcDir,
      testMatch: ['<rootDir>/**/*.spec.js'],
      setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        resolve(rootDir, 'jest.setup.js')
      ]
    }
  ]
}
