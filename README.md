# Installation

Install the rollup and babel dependencies

    $ yarn add -D rollup rollup-plugin-{terser,babel,commonjs,postcss} @babel/core @babel/preset-env

Install PostCSS dependencies

    $ yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

## Build

    yarn build

## Run

Activate python virtual environment

    $ export FLASK_APP=app.py
    $ export FLASK_DEBUG=1
    $ flask run

Development:

    $ export FLASK_ENV=development



