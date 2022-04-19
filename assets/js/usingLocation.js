"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Intro to thir-party APIs
// Aaron Dayrit

/*---------------------------
    getCurrentPosition()
-----------------------------*/

/*
    The 'getCurrentPosition' method retrieves the current geographic 
    location ofthe device. The location is expressed as a set of 
    geographic coordinates together with information about heading 
    and speed. The location informationis returned in a 'Position' object
    
    'getCurrentPosition' can succeed or fail. It accepts two optional
    callback functions that will execute in each case respectively
    
    getCurrentPosition(success, error, {options});
*/

/*----------------------
    Success function
------------------------*/
const showLocation = (position) => {
    // const logitude = position.coords.longitude;
    // const latitude = position.coords.latitude;
    console.log(position);

    // Object destructuring
    //  MUST MATCH NAME OF PROPERTIES IN Object
    const {longitude, latitude} = position.coords
    console.log(`longitude = ${longitude}`);
    console.log(`latitude = ${latitude}`);
}

/*----------------------
    error/fail function
------------------------*/
const errorHalnder = () => {
    console.log('bruh');
}


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showLocation, errorHalnder);
}else{
    console.log('Geolocation not supported by your browser')
}