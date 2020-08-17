const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Movie = require('../models/Movie');

router.get('/', auth, (req, res) => {
    Movie.find({ owner: req.user.id })
        .then(movies => res.json(movies))
});

router.post('/', auth, (req, res) => {
    const newMovie = new Movie({
        title: req.body.title,
        year: req.body.year,
        director: req.body.director,
        imdb_rate: req.body.imdb_rate,
        your_rate: req.body.your_rate,
        owner: req.user.id
    });

    newMovie.save()
        .then(movie => res.json(movie))
});

router.delete('/:id', auth, (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => movie.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ sucess: false }))
});

module.exports = router;