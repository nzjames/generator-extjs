module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

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
            },
            siesta: {
                path: 'http://localhost:5000/siesta'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['src/**/*.js']
            }
        }
    });

    grunt.registerTask('server', [
        'connect:devserver',
        'open:devserver',
        'open:siesta',
        'watch'
    ]);
};