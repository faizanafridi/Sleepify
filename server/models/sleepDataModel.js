const mongoose = require('mongoose');

const sleepSchema = mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    aSleepTime : {
        type: String,
        required: true
    },
    wakeUpTime : {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    hours: {
        type : Number,
        required: true
    }
})
module.exports = mongoose.model('Sleep',sleepSchema);