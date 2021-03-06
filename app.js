require('dotenv').config();
const express          = require('express');
const cookieParser     = require('cookie-parser')
const connectDB        = require('./src/database/connection');
const mainRouter       = require('./src/routes/mainRouter');
const userRouter       = require('./src/routes/userRoute');
const authRouter       = require('./src/routes/authRouter');
const classeRouter     = require('./src/routes/classeRoute');
const classroomRouter  = require('./src/routes/classroomRoute');
const courseRouter     = require('./src/routes/courseRoute');
const gradeRouter      = require('./src/routes/gradeRoute');
const subjectRouter    = require('./src/routes/subjectRoute');
const timeTablesRouter = require('./src/routes/timeTablesRoute');
const authenticate     = require('./src/middleware/Authenticate');
const PORT             = process.env.PORT || 3000;
const HOST             = process.env.HOST;

app = express();

app.use(cookieParser())
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data
app.set('views', './views'); // Set view engine
app.set('view engine', 'ejs');
app.use(express.static('public')); // Load assets

// Load routers
app.use('/', mainRouter);
app.use('/admin', userRouter);
app.use('/auth', authRouter);
app.use('/classes', classeRouter); 
app.use('/classroom', classroomRouter); 
app.use('/course', courseRouter); 
app.use('/grade', gradeRouter);
app.use('/subject', subjectRouter);
app.use('/timeTables', timeTablesRouter);

// Database connection
connectDB();

// Start server
app.listen(PORT, () => { console.log(`Listening on http://${HOST}:${PORT}`) })
