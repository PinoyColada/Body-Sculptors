const mongoose = require('mongoose');
require('dotenv').config();

// mongodb+srv://pinoycolada:Zinger100@cluster0.jnp76.mongodb.net/fitnessDatabase?retryWrites=true&w=majority

let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/fitnessDatabase'

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db