import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import users from './routes/users';

mongoose.connect('mongodb://localhost/bad_comments');

mongoose.connection.on('connected', () => console.log('connected to db'));
mongoose.connection.on('error', () => console.log('Error connecting db'));

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));

app.use('/users', users)

const port = 8000;
app.listen(port, () => console.log('App is running on port ' +port))