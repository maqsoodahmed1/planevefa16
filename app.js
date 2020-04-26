const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

const app = express();
mongoose.connect('mongodb://localhost/planeve', {
    useMongoClient: true
}).then(() => console.log('MongoDB Connected ...'))
  .catch(err => console.log(err));


// Load routers
const users = require('./routes/users');
const venues = require('./routes/venues')
const admin = require('./routes/admin/index')
const referal = require('./routes/admin/referal')
const features = require('./routes/admin/features')
const booking = require('./routes/booking')
const superAdmin = require('./routes/superadmin/index')

// Passport Config
require('./config/passport')(passport);

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mongoose


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Method override
app.use(methodOverride('_method'));

// Express session
app.use(session({
    secret: 'section',
    resave: false,
    saveUninitialized: true
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Index Route
app.get('/', (req, res) => {
    const title = 'Welcome to VidJot!';
    res.render('index', { title });
});

// About Page
app.get('/about', (req, res) => {
    res.render('about');
});

// Use routesf
app.use('/users', users);
app.use('/venues',venues)
app.use('/admin',admin)
app.use('/referal',referal)
app.use('/features',features)
app.use('/booking',booking)
app.use('/superadmin',superAdmin)

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});