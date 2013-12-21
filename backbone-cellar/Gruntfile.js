module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            options: {
                debug: true,
                transform: [ 'reactify' ],
                alias: [
                    'client/_vendors/backbone.js:backbone',
                    'client/_vendors/jquery.js:jquery',
                    'client/_vendors/underscore.js:underscore',
                ]
            },
            app: {
                src:  'client/app.js',
                dest: 'public/app.js'
            }
        },

        watch: {
          files: [ 'client/**/*.js' ],
          tasks: [ 'browserify' ]
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
