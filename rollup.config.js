import copy from 'rollup-plugin-copy'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import sourcemaps from 'rollup-plugin-sourcemaps'
const isProductionEnv = process.env.NODE_ENV === 'production'
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
      postcss({
        extract: true,
        // extract: 'dist/index.css',
        minimize: isProductionEnv
      }),
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
