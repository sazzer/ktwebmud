const BABEL_PRESETS = ['es2015'];
const BABEL_PLUGINS = ['transform-react-jsx'];

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    // Keep the plugins in alphabetical order
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                plugins: BABEL_PLUGINS,
                presets: BABEL_PRESETS
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/main/javascript',
                    src: ['**/*.js'],
                    // This hack means that the test code sees a module called 'webmud' containing the code to be tested
                    dest: 'target/javascript/node_modules/webmud'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'src/test/javascript',
                    src: ['**/*.js'],
                    dest: 'target/javascript/test'
                }]
            }
        },
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
        i18next: {
            locales: {
                src: ['src/main/languages/**/locales'],
                dest: 'target/classes/static/locales/webmud'
            }
        },
        jscpd: {
            main: {
                path: 'src/main/javascript'
            }
        },
        mochaTest: {
            options: {
                reporter: 'spec'
            },
            test: {
                src: [
                    'target/javascript/test/**/*.spec.js'
                ]
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
                                plugins: BABEL_PLUGINS,
                                presets: BABEL_PRESETS
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

    grunt.registerTask('build', ['eslint:main', 'jscpd:main', 'webpack:main', 'i18next']);
    grunt.registerTask('test', ['babel:main', 'babel:test', 'mochaTest:test']);
};
