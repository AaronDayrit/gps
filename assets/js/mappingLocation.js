"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Intro to thir-party APIs
// Aaron Dayrit

/*---------------------------

-----------------------------*/

const btn = document.getElementById('btn');

const showLocation = (position) => {
    console.log(position);

    const {longitude, latitude , accuracy} = position.coords
    // console.log(`longitude = ${longitude}`);
    // console.log(`latitude = ${latitude}`);
    // console.log(`accuracy = ${accuracy} meters`);

    window.location.assign(`https://www.openstreetmap.org/#map=19/${latitude}/${longitude}`);
}

const errorHalnder = () => {
    console.log('bruh');
}

btn.addEventListener('click', () => {
    if(navigator.geolocation){
        // High accuracy 
        navigator.geolocation.getCurrentPosition(showLocation, errorHalnder, 
            { enableHighAccuracy: true});
    }else{
        console.log('Geolocation not supported by your browser')
    }
})