import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
dotenv.config();

//const express = require('express');
// ? in older version we have to do this but
// ? in node new version now it is not required to do this
// ? we can use express directly from express
// ? by enable it in package.json "type": "module",

const app = express();

// ** app.use(express.json());
// ** app.use(express.urlencoded({});

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
// ? above line say that we have to go http://localhost:5000/posts to use {postRoutes}

app.use("/user", userRouter);
// ? above line say that we have to go http://localhost:5000/user to use {userRouter}

app.get('/', (req, res) => {
    res.send('Hello to My API');
});

//const CONNECTION_URL ='mongodb+srv://memoryprojectquangchanvi:TdQCzU1SxL44HO8B@cluster0.1min1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// ? this credential should be secured so this is temporary and put in environment variable
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // {.then} If app connection success 
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    // {.catch} If app connection not success 
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
// ? Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// ? by default, you need to set it to false.
// ? to make sure there is no warning in console
// ? https://mongoosejs.com/docs/deprecations.html

// https://www.mongodb.com/cloud/atlas
