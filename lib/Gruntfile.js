module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-postcss');
    grunt.initConfig({
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },
        browserify: {
            js: {
                src: ['../js/main.js'],
                dest: '../dist/app.js'
            },
            options: {
                browserifyOptions: {
                  paths: ["./node_modules"]
                }
            }
          },
       jshint: {
          files: ['../js/**/*.js'], //location of javascript files
          options: {
             predef: ["document", "console"], //allows for predefined things not found in js
             esnext: true, //allows for ES6
             globalstrict: true,
             browserify: true
           }
       },
       sass: { //setup sass compilation
          dist: {
             files: {
                '../css/styles.css': '../scss/input.scss'
             }
          }
       },
       watch: {
          javascripts: {
             files: ['../js/**/*.js'],
             tasks: ['jshint']
          },
          sass: {
             files: ['../sass/**/*.scss'],
             tasks: ['sass']
          },
          browserify: {
              files: ['../js/**/*.js'],
              tasks: ['browserify']
          }
       }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch','postcss:dist']);
 };