const mongoose = require('mongoose');


// Creating a Schema for for text messages

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    senderId: {
       type: String,
       required: true
    }
});


// Export the Models

const MESSAGE = new mongoose.model('MESSAGE',messageSchema);

module.exports = MESSAGE;