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
