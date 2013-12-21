var express         = require('express'),
    app             = express(),

    ReactTools      = require('react-tools');

global.nap          = require('nap');

nap.preprocessors['.jsx'] = function (contents) {
    return ReactTools.transform(contents);
};

nap({
    mode: process.env.NODE_ENV || 'development',
    publicDir: __dirname + '/public',
    assets: {
        js: {
            app: [
                '/client/js/_vendors/*.js',
                '/client/js/**/*.js',
                '/client/js/**/*.jsx'
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

