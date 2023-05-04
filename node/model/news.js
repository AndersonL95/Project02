const mongoose = require('mongoose');

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
        data: Buffer,
        contentType: String,
        type: Array,
        default: []
        
        
    }
}, {
    timestamps: true
})
module.exports = mongoose.model("News", NewsSchema)