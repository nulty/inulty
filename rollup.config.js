import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js',
  output: {
    name: 'bundle',
    file: 'static/bundle.js',
    format: 'iife'
  },
  plugins: [
    postcss({
      config: {
        path: './postcss.config.js'
      },
      use: {
        sass: {javascriptEnabled: true}
      },
      from: undefined // fixes warning -- "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config."
    }),
    babel(),
  ]
};
