require('dotenv').config();
const express = require('express');
// const passport = require('passport');
// const flash = require('express-flash');
// const session = require('express-session');
// const methodOverride = require('method-override');
// const { checkAuthenticated, checNotAuthenticated } = require('./src/middleware/Authentication')
const connectDB = require('./src/database/connection');
const mainRouter = require('./src/routes/mainRouter');
const userRouter = require('./src/routes/userRoute');
const authRouter = require('./src/routes/authRouter');
// const initializePassport = require('./passport.config')
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

app = express();

// initializePassport(
//     passport,
//     async (email) => {
//         const userFound = User.findOne({ email });
//         return userFound
//     },
//     async (id) => {
//         const userFound = User.findOne({ _id: id });
//         return userFound
//     }
// )

app.use(express.json());
// Set view engine
app.set('views', './views');
app.set('view engine', 'ejs');
// flah messages
// app.use(flash());
// Sessions
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET,
//         resave: false,
//         saveUninitialized: false
//     })
// );
// app.use(passport.initialize);
// app.use(passport.session());
// app.use(methodOverride('_method'))
// Load assets
app.use(express.static('assets'))
// Load routers
app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);
// app.use('/auth', authRouter)
// Database connection
connectDB();
// Start server
app.listen(PORT, () => { console.log(`Listening on http://${HOST}:${PORT}`) })

/*
pour les routes qui necessite une auth on applique le middleware checkAuthenticated
et pour le login on applique le checkNotAuthenticated*/