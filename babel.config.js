export default function babelConfig ({ cache, env }) {
  cache.invalidate(() => process.env.NODE_ENV)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: process.env.BABEL_DEBUG,
          modules: env('test') ? 'commonjs' : 'auto',
          useBuiltIns: 'usage',
          corejs: {
            version: '3.8',
            proposals: true
          },
          targets: {
            node: 'current'
          }
        }
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src/**'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
        }
      ]
    ]
  }
}
