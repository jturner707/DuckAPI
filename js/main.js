"use strict";
/**
// this a crude way to put the API in the app
// this is an object already
let data = {"url": "https://random-d.uk/api/images/51.jpg", "message": "Powered by random-d.uk"}
// could use this object this way:
alert(data.message);
alert(data.url);

// we want to convert the json response into a typescript class (structure)  USE AI

*/
/**
 * Bing CoPilot generated class
 */
class RandomDuck {
    constructor(message, url) {
        this.message = message;
        this.url = url;
    }
}
// example of how to tie (consume) the api to the class
// let data: RandomDuck = new RandomDuck("This is a random duck", "https://random-d");
// .then methods allow the program to wait for the info to be fetched.  It could take seconds.
// this is considered asynchronous programming.
function getDuck() {
    return fetch('https://random-d.uk/api/v2/random', { mode: 'no-cors' })
        .then(response => response.json())
        .then((data) => {
        return new RandomDuck(data.message, data.url);
    });
}
// ai can refactor this without lambda functions but it is longer
// returns a promise that resolves to a RandomDuck object
/**
 * @returns a promise
 */
function main() {
    getDuck().then((duck) => {
        console.log(duck);
        console.log(duck.message);
        console.log(duck.url);
    });
}
