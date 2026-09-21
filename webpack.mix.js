let mix = require('laravel-mix');

mix
    .setPublicPath('./assets');

// mix
//     .copy('src/fonts', 'assets/fonts');
mix
    .copy('src/img', 'assets/img');
mix
    
    
    // Main Styling
    .sass('src/css/main-styling.scss', 'assets/css')
// mix
//     // Micromodal JS
//     .copy('src/js/micromodal/micromodal.min.js', 'assets/js/micromodal')
//     // Packery JS
//     // .copy('src/js/packery/packery.pkgd.min.js', 'assets/js/packery')
//     // Infinite Scroll JS
//     // .copy('src/js/infinite-scroll/infinite-scroll.pkgd.min.js', 'assets/js/infinite-scroll')
//     // Fancybox JS
//     // .copy('src/js/fancybox/fancybox.min.js', 'assets/js/fancybox')
//     // Header JS
//     .js('src/js/main-script.js', 'assets/js');
mix
    .autoload({ jquery: ['$', 'window.jQuery'] })
    .options({ processCssUrls: false })
    .sourceMaps(false, 'source-map')
    .version();