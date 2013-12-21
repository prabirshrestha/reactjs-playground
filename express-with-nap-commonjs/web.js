var express         = require('express'),
    app             = express(),

    ReactTools      = require('react-tools');

global.nap          = require('nap');

nap.preprocessors['.jsx'] = function (contents, file) {
    // http://tritarget.org/blog/2012/12/31/moving-commonjs-to-the-browser/
    var alias = { '_vendors/react': 'react' },
        key = file.substr('/client/js/'.length - 1);

    key = key.substr(0, key.lastIndexOf('.'));

    if(alias[key]) {
        key = alias[key];
    }

    return (
        ';(function() { var modules = {}; ' +
        'modules["' + key + '"] = function(exports, require, module) {' +
        ReactTools.transform(contents)
        + '}; Stitch(modules); })();'
    );
};

nap({
    mode: process.env.NODE_ENV || 'development',
    publicDir: __dirname + '/public',
    assets: {
        js: {
            app: [
                '/client/js/_vendors/stitch.js',
                '/client/js/_vendors/*.js',
                '/client/js/_vendors/*.jsx',
                '/client/js/**/*.jsx',
                '/client/js/main.js',
            ]
        }
    }
});

nap.package();

app.use(app.router);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set("view options", { layout: false });

app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
    res.render('index');
});

app.listen(process.env.PORT || 3000);

