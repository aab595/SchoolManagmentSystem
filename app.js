require('dotenv').config();
const express      = require('express');
const cookieParser = require('cookie-parser')
const connectDB    = require('./src/database/connection');
const mainRouter   = require('./src/routes/mainRouter');
const userRouter   = require('./src/routes/userRoute');
const authRouter   = require('./src/routes/authRouter');
const authenticate = require('./src/middleware/Authenticate')
const PORT         = process.env.PORT || 3000;
const HOST         = process.env.HOST;

app = express();
app.use(cookieParser())

app.use(express.json()) // for json
   app.use(express.urlencoded({ extended: true })) // for form data
// Set view engine
app.set('views', './views');
app.set('view engine', 'ejs');
// Load assets
app.use(express.static('public'));
// Load routers
app.use('/', mainRouter);
app.use('/admin', authenticate, userRouter);
app.use('/auth', authRouter);
// Database connection
connectDB();
// Start server
app.listen(PORT, () => { console.log(`Listening on http://${HOST}:${PORT}`) })
