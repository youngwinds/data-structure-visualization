import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';

export default {
  input: './src/index.ts',
  output: [
    { file: './dist/cjs/index.js', format: 'cjs' },
    { file: './dist/cjs/index.min.js', format: 'cjs', plugins: [terser()] },

    { file: './dist/es/index.js', format: 'es' },
    { file: './dist/es/index.min.js', format: 'es', plugins: [terser()] },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    typescript({
      
    }),
    json(),
  ],
};
