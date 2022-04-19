"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Intro to third-party APIs
// Aaron Dayrit

/*----------------------
    Window sizing
------------------------*/

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

/*----------------------
    Success function
------------------------*/

mapboxgl.accessToken = 'pk.eyJ1IjoiYWFyb25kYXlyaXQiLCJhIjoiY2wxeHg5ZHFxMDc0czNjcDZjdmxidDlubiJ9.IIXeQk32XffEHB5CCsL3aQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [0,0,0], // starting position [lng, lat]
    zoom: 10, // starting zoom
    interactive: false
});



const showLocation = (position) => {
    const {longitude, latitude , accuracy} = position.coords;

    console.log(`longitude = ${longitude}`);
    console.log(`latitude = ${latitude}`);
    console.log(`accuracy = ${accuracy} meters`);

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWFyb25kYXlyaXQiLCJhIjoiY2wxeHg5ZHFxMDc0czNjcDZjdmxidDlubiJ9.IIXeQk32XffEHB5CCsL3aQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [longitude,latitude,accuracy], // starting position [lng, lat]
        zoom: 15, // starting zoom
        pitch: 0,
        // interactive: false
    });    
}

/*----------------------
    error/fail function
------------------------*/
const errorHalnder = () => {
    console.log('bruh');
}

if(navigator.geolocation){
    // High accuracy 
    navigator.geolocation.watchPosition(showLocation, errorHalnder, 
        { enableHighAccuracy: true});
}else{
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [0,0,0], // starting position [lng, lat]
        zoom: 10, // starting zoom
        interactive: false
    });    
}