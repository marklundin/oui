
// shared config for all unit tests
module.exports = function (config) {
    config.set({

        frameworks: [ 'browserify', 'jasmine' ],

        basePath:'../',

        files: [
            "src/**/*.js*",
            'test/*.test.js'
        ],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/*.js': ['browserify']
        },

        babelPreprocessor: {
            options: {
                presets: ['airbnb']
            }
        },

        browserify: {
            debug: true,
            transform: [
                ['babelify', { presets: ['airbnb'] }]
            ],
            configure: function(bundle) {
                bundle.on('prebundle', function() {
                    bundle.external('react/addons');
                    bundle.external('react/lib/ReactContext');
                    bundle.external('react/lib/ExecutionEnvironment');
                });
            }
        },

        //singleRun: true,

        browsers: ['Chrome'],

        reporters: ['progress']

    })
}