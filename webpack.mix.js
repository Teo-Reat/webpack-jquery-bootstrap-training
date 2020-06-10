let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/app/index.js', 'dist/')
	.sass('src/sass/style.scss', 'dist/')
	.setPublicPath('dist')
	.copyDirectory('src/assets/images', 'dist/images')
	.options({
		processCssUrls: false
	})
	.browseSync('http://127.0.0.1:8080/')
