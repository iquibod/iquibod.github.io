let mix = require('laravel-mix');
mix
    .setPublicPath('./assets');
mix
    .copy('src/img', 'assets/img');
mix
    // Main Styling
    .sass('src/css/main-styling.scss', 'assets/css')
mix
    .js('src/js/main-script.js', 'assets/js');
mix
    .autoload({ jquery: ['$', 'window.jQuery'] })
    .options({ processCssUrls: false })
    .sourceMaps(false, 'source-map')
    .version();