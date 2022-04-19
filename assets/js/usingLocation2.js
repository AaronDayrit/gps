"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Intro to thir-party APIs
// Aaron Dayrit

/*---------------------------
    getCurrentPosition()
    -More accurate
-----------------------------*/

/*----------------------
    Success function
------------------------*/
const showLocation = (position) => {
    // const logitude = position.coords.longitude;
    // const latitude = position.coords.latitude;
    console.log(position);

    // Object destructuring
    //  MUST MATCH NAME OF PROPERTIES IN Object
    const {longitude, latitude , accuracy} = position.coords
    console.log(`longitude = ${longitude}`);
    console.log(`latitude = ${latitude}`);
    console.log(`accuracy = ${accuracy} meters`);
}

/*----------------------
    error/fail function
------------------------*/
const errorHalnder = () => {
    console.log('bruh');
}


if(navigator.geolocation){
    // High accuracy 
    navigator.geolocation.getCurrentPosition(showLocation, errorHalnder, 
        { enableHighAccuracy: true});
}else{
    console.log('Geolocation not supported by your browser')
}