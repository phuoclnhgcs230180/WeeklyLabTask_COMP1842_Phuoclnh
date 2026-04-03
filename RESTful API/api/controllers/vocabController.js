const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.list_all_words = (req, res) => {
    Vocab.find({})
        .then(words => res.json(words))
        .catch(err => res.send(err));
};

exports.create_a_word = (req, res) => {
    const new_word = new Vocab(req.body);
    new_word.save()
        .then(word => res.json(word))
        .catch(err => res.send(err));
};

exports.read_a_word = (req, res) => {
    Vocab.findById(req.params.wordId)
        .then(word => res.json(word))
        .catch(err => res.send(err));
};

exports.update_a_word = (req, res) => {
    Vocab.findOneAndUpdate({_id: req.params.wordId}, req.body, {new: true})
        .then(word => res.json(word))
        .catch(err => res.send(err));
};

exports.delete_a_word = (req, res) => {
    Vocab.deleteOne({_id: req.params.wordId})
        .then(() => res.json({message: 'Word successfully deleted'}))
        .catch(err => res.send(err));
};

       