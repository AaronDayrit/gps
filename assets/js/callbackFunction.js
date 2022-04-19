"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Intro to thir-party APIs
// Aaron Dayrit

/*---------------------------
    Callback functions
-----------------------------*/

/*
    Functnion is a function passed into another functions as
    an argument, which is then invoked inside the other function to complete
    some kind fo routine or action

    Remember: A function is a data type, so we can pass it to another
    function as an argument
*/

const greetings = (name) => {
    console.log(`Hello, ${name}!`);
}

const processName = (callback) => {
    let name = prompt('please, enter your name!');
    callback(name);
}   

// automaticall runs greetings nad gives (name)
processName(greetings); 
// promt('please, enter your name!')
// console.log(`Hello, name')

console.log();