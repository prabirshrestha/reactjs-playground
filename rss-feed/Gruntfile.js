module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            options: {
                debug: true,
                transform: [ 'reactify' ],
                external: [ 'jquery' ],
            },
            app: {
                src:  'client/app.js',
                dest: 'public/app.js'
            }
        },

        connect: {
            server: {
                options: {
                    port: 3000,
                    hostname: '*',
                    base: 'public'
                }
            }
        },

        watch: {
          files: [ 'client/**/*.js' ],
          tasks: [ 'browserify' ]
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect', 'watch']);

};
