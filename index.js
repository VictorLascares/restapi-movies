import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import movies from './routes/movies.js';
const app = express();
app.use(express.json());

dotenv.config();

connectDB();

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.use('/movies',movies);

// Satarting server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});