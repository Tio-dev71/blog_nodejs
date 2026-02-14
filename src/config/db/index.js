const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected');
    }catch (error) {
        console.log('Connect Fail!!!');        
    }

}

module.exports = { connect }