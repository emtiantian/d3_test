
import resolve from '@rollup/plugin-node-resolve';
export default [
  {
    input: 'd3/index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name:'index'
    },
    watch: {
      include: 'd3/**'
    },
    plugins:[resolve()]
  },
];