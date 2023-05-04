const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
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