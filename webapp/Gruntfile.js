module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    // Keep the plugins in alphabetical order
    grunt.initConfig({
        eslint: {
            options: {
                configFile: 'eslintrc'
            },
            main: {
                files: [{
                    expand: true,
                    src: ['src/main/javascript/**/*.js']
                }]
            }
        },
        jscpd: {
            main: {
                path: 'src/main/javascript'
            }
        },
        webpack: {
            main: {
                entry: {
                    main: './src/main/javascript/main.js'
                },
                output: {
                    path: 'target/classes/static/js',
                    filename: '[name].js',
                    sourceMapFilename: '[file].map'
                },
                module: {
                    loaders: [
                        {
                            test: /\.jsx?$/,
                            exclude: /(node_modules)/,
                            loader: 'babel',
                            query: {
                                presets: [
                                    'es2015'
                                ]
                            }
                        }
                    ]
                },
                stats: {
                    colors: true
                },
                progress: true,
                failOnError: true,
                inline: false,
                hot: false,
                devtool: 'source-map'
            }
        }
    });

    grunt.registerTask('build', ['eslint:main', 'jscpd:main', 'webpack:main']);
};
