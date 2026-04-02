const fetch = require('node-fetch');

const jokeAPI = 'https://official-joke-api.appspot.com/random_joke';

async function getRandomJoke() {
    try {
        const response = await fetch(jokeAPI);
        const joke = await response.json();
        console.log(`${joke.setup} - ${joke.punchline}`);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

getRandomJoke();