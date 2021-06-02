import path from 'path'
import babel from 'rollup-plugin-babel';
// import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js',
  output: {
    file: 'static/bundle.js',
    format: 'iife'
  },
  plugins: [
    commonjs(),
    postcss({
      config: {
        path: './postcss.config.js'
      },
      use: {
        sass: { javascriptEnabled: true }
      }
    }),
    babel(),
  ]
};
