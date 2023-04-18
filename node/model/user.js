const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    cargo: {
        type: String,
        enum:['user', 'admin'],
        default: 'user'
    },
    picture: {
        type: String,
        required: true
   },
   verified: {
    type: Boolean,
    required: true
   }
},
{timestamps: true}
)
module.exports = mongoose.model('Users', userSchema);