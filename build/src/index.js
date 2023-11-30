"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_KEY = "AIzaSyAUkjFdSmeGbo_jXyYvuY5YSE0Jfcn8t3U";
const axios = require("axios");
async function getLatLongFromAddress(address) {
    try {
        const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: address,
                key: API_KEY, // Replace with your Google Maps API key
            },
        });
        const location = response.data.results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);
    }
    catch (error) {
        console.error("Error getting latitude and longitude:", error);
    }
}
// Example usage
const address = "Sector 24,Gurugram , India";
getLatLongFromAddress(address);
//# sourceMappingURL=index.js.map