import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//const express = require('express');
// ? in older version we have to do this but
// ? in node new version now it is not required to do this
// ? we can use express directly from express
// ? by enable it in package.json "type": "module",