const Joke = require('../model/joke');
const Schema = require('mongoose').Schema;

exports.createJoke = async function(setup, punchline){
    const joke = Joke({
        setup : setup,
        punchline : punchline
    })
    return await joke.save();
}

exports.deleteJoke = async function(joke){
    await joke.deleteOne().exec();
}

exports.getJokes = async function(){
    return await Joke.find().exec();
}