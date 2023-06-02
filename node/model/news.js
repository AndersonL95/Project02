const mongoose = require('mongoose');
const { array } = require('../config/configMulter');

const NewsSchema = new mongoose.Schema({
    news_id: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    titulo:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    conteudo:{
        type: String,
        required: true,
    },
    images: {
        type: Array,  
        data: Buffer,
        contentType: String,
             
        
    }
}, {
    timestamps: true
})
module.exports = mongoose.model("News", NewsSchema)