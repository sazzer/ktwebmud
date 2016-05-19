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
        }
    });

    grunt.registerTask('build', ['eslint:main', 'jscpd:main']);
};
