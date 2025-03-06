const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

//connections t the db
dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('connected db');
})

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = 4050

app.use('/api/user',require('./routes/auth'));
app.use('/api/sleep',require('./routes/sleep'))

app.listen(PORT,()=>{
    // debugger;
    console.log('server working');
})