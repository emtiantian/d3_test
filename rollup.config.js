import copy from 'rollup-plugin-copy'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: './index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'index'
    },
    watch: {
      include: 'src/**',
      exclude: 'node_modules/**'
    },
    plugins: [
      commonjs(),
      resolve(),
      copy({
        targets: [
          { src: './public/*', dest: 'dist' }
        ]
      })
    ],
    external: ['lodash']
  }
]
