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
            scripts: {
                files: ['src/**/*.js']
            },
            sass: {
                files: 'src/sass/**/*.scss',
                tasks: ['sass:dist', 'autoprefixer']
            }
        },
        copy: {
            html: {
                src: 'src/index.html',
                dest: 'build/index.html'
            },
            css: {
                src: 'src/css/all.css',
                dest: 'build/all.css'
            }
        },
        cssmin: {
            css: {
                files: {
                    'src/css/all.css': ['build/all.css']
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'build/app.js': 'build/app.js'
                }
            }
        },
        concat: {
            js: {
                src: [ 'src/locale/en.js', 'src/app/**/*.js', 'src/app.js'],
                dest: 'build/app.js'
            }
        },
        usemin: {
            html: 'build/index.html'
        },
        clean: {
            dist: 'build'
        },
        autoprefixer: {
            css: {
                src: 'src/css/all.css',
                dest: 'src/css/all.css'
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'src/css/all.css': 'src/sass/all.scss'
                }
            }

        }
    });

    grunt.registerTask('server', [
        'sass',
        'autoprefixer',
        'connect:devserver',
        'open:devserver',
        'watch'
    ]);
    grunt.registerTask('build', [
        'clean',
        'sass',
        'autoprefixer',
        'copy',
        'concat',
        'uglify',
        'cssmin',
        'usemin'
    ]);
};
