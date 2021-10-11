import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import ESLintPlugin from 'eslint-webpack-plugin'
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import esLintConfig from './eslint.config.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname)
const srcDir = resolve(rootDir, 'src')
const publicDir = resolve(rootDir, 'public')

export default function webpackConfig (_env = {}) {
  return {
    mode: 'development',
    entry: join(srcDir, 'index.tsx'),
    module: {
      rules: [
        {
          test: /\.tsx?$/i,
          exclude: /node_modules/,
          loader: 'ts-loader'
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: ExtractCssChunks.loader,
              options: {
                hmr: true
              }
            },
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new Dotenv({ path: join(rootDir, '.env'), safe: true }),
      new ESLintPlugin({ overrideConfig: esLintConfig, fix: true }),
      new ExtractCssChunks(),
      new HtmlWebpackPlugin({ template: join(publicDir, 'index.html') })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    devServer: {
      port: 1234,
      proxy: {
        '/api': {
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
          target: process.env.API_URL
        }
      },
      static: {
        directory: join(rootDir, 'static'),
      }
    },
    devtool: 'cheap-source-map',
    stats: 'minimal'
  }
}
