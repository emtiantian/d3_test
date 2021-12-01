import copy from 'rollup-plugin-copy'
import resolve from '@rollup/plugin-node-resolve'

import typescript from '@rollup/plugin-typescript'
import sourcemaps from 'rollup-plugin-sourcemaps'

export default [
  {
    input: './main.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        name: 'index',
        sourcemap: true
      }
    ],
    watch: {
      include: 'src/**',
      exclude: 'node_modules/**'
    },
    plugins: [
      resolve(),
      copy({
        targets: [
          { src: './public/*', dest: 'dist' }
        ]
      }),
      typescript(),
      sourcemaps()
    ],
    external: ['lodash']
  }
]
