import express from 'express';    // Import is a more modern way of require
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

// Setup the starting path for all routes inside posts.js
app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

// Connect to cloud database
// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = 'mongodb+srv://huantran:huantran123@cluster0.as4cknn.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 1128;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.log(err.message));

