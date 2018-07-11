module.exports = function( config ) {
    config.set( {
        basePath: "",
        frameworks: [ "mocha", "expect" ],
        files: [
            "dist/tests/bundle.js"
        ],
        exclude: [],
        preprocessors: {},
        reporters: [ "mocha" ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [ "PhantomJS" ],
        singleRun: true,
        concurrency: Infinity
    } );
};
