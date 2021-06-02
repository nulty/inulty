import babel from 'rollup-plugin-babel';
// import eslint from 'rollup-plugin-eslint';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import replace from 'rollup-plugin-replace';
// import uglify from 'rollup-plugin-uglify';
// import postcss from 'rollup-plugin-postcss';


export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [ babel() ]
};
