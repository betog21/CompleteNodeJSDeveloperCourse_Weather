require("dotenv").config();
const request = require("request");

const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESSKEY}&query=37.8267,-122.4233`;

request({ url, json: true }, (error, response) => {
  const { temperature, feelslike, weather_descriptions } =
    response.body.current;
  console.log("Tempeture: ", temperature, "Feels: ", feelslike);
  console.log("Descriptions: ", weather_descriptions[0]);
});

const urlGEO = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.ACCESS_TOKEN}`;
request({ url: urlGEO, json: true }, (error, response) => {
  const centerArray = response.body.features[0].center;
  const longitude = centerArray[0];
  const latitude = centerArray[1];
  console.log("Longitude: ", longitude, "Latitude: ", latitude);
});
