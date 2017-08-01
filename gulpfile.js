var gulp = require('gulp'),
    server = require('gulp-develop-server'),
    webpack = require('webpack'),
    WebpackDevServer = require("webpack-dev-server"),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    webpackConfig = require("./webpack.config.js");

gulp.task("webpack-dev-server", function() {
    var myConfig = webpackConfig;
    myConfig.devtool = "eval";
    myConfig.debug = true;
    myConfig.plugins.push(
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:8000/',
                notify:false
            },
            {
                reload: true
            }
        )
    );

    new WebpackDevServer(webpack(myConfig), {
        publicPath: '/assets/',
        stats: {
            colors: true
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false
            }
        },
        contentBase: __dirname + '/public'
    }).listen(8000, "localhost");
});

gulp.task('default', ['webpack-dev-server']);

