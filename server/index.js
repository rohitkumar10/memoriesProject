// const express = require('express')
import express from 'express'; // write "type": "module" in package.json
import bodyParser from 'body-parser';
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose');
// const cors = require('cors');
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();  // initializing the app and then we can use all different methods eg.

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: '30mb', extended: true}));  // for images
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb://localhost:27017/memoriesProject';
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
