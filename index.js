import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

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

const CONNECTION_URL ='mongodb+srv://memoryprojectquangchanvi:TdQCzU1SxL44HO8B@cluster0.1min1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// this credential should be secured so this is temporary and put in environment variable
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // {.then} If app connection success 
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    // {.catch} If app connection not success 
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
// to make sure there is no warning in console

// https://www.mongodb.com/cloud/atlas
