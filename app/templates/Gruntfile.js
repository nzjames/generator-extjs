module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        connect: {
            devserver: {
                options: {
                    port: '5000',
                    base: 'src',
                    livereload: true
                }
            }
        },
        open: {
            devserver: {
                path: "http://localhost:5000"
            }
        },
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: 'src/index.html'
            },
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['jshint:scripts']
            }
        },
        jshint: {
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish')
            },
            scripts: 'src/**/*.js'
        }
    });

    grunt.registerTask('server', [
        'jshint',
        'connect:devserver',
        'open:devserver',
        'watch'
    ]);
};