var express 		= require ('express')
var exhbs	 		= require('express-handlebars');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path 		   = require ('path')
//require handlebars? dont think so

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public')); //** __dirname

app.use(bodyParser.urlencoded({
	extended: false
}));
// methodoverride
app.use(methodOverride('_method'));



//handlebars
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');