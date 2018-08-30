const mix = require('laravel-mix'),
  tailwind = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 */

/**
 * Predefine paths.
 *
 * @type {string}
 */
const buildPath = '../src';
const cssPath = `${buildPath}/css`;
const jsPath = `${buildPath}/js`;
mix.setPublicPath(buildPath);

/**
 * Predefine src paths.
 *
 * @type {string}
 */
const sassPath = `sass`;
const jsSrcPath = `js`;

// Compile tailwindcss.
mix.sass(`${sassPath}/tailwind.scss`, `${cssPath}/utils.css`)
  .options({
    processCssUrls: false,
    postCss: [tailwind('tailwind.js')]
  });

/**
 * App bundling.
 */
mix.js(`${jsSrcPath}/app.js`, jsPath)
  .sass(`${sassPath}/app.scss`, cssPath);