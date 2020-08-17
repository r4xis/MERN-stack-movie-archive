const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    imdb_rate: {
        type: Number,
        require: true
    },
    your_rate: {
        type: Number,
        require: true
    },
    owner: {
        type: String,
        required: true
    }
});

module.exports = Movie = mongoose.model('movie', MovieSchema);