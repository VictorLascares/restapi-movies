import express from 'express';
import dotenv from "dotenv";
const app = express();

dotenv.config();

// Settings
app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});