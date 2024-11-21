"use strict";
class RandomDuck {
    constructor(message, url) {
        this.message = message;
        this.url = url;
    }
}
function getDuck() {
    return fetch('https://random-d.uk/api/v2/random')
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
        .then((data) => {
        return new RandomDuck(data.message, data.url);
    });
}
function main() {
    getDuck().then((duck) => {
        console.log(duck);
        console.log(duck.message);
        console.log(duck.url);
    }).catch(error => {
        console.error('Error fetching the duck:', error);
    });
}
