import copy from 'rollup-plugin-copy'
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: './index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name:'index'
    },
    watch: {
      include: 'd3/**'
    },
    plugins:[resolve(),copy({
      targets: [
        { src: './public/*', dest: 'dist' },
      ]
    })]
  },
];