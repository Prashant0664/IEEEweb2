const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Formdata = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,

    },
    subject: {
        type: String,
        required: true,
    },
    messege:{
        type: String,
        required: true,
    }
})

const formit = mongoose.model('data', Formdata)

exports = module.exports = {
    formit
}