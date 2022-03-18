require("dotenv").config();
const request = require("request");

const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESSKEY}&query=37.8267,-122.4233`;

request({ url, json: true }, (error, response) => {
  if (error) {
    console.error("Error fetching the weather.");
  } else if (response.body.error) {
    console.error("Error from the API weather.");
  } else {
    const { temperature, feelslike, weather_descriptions } =
      response.body.current;
    console.log("Tempeture: ", temperature, "Feels: ", feelslike);
    console.log("Descriptions: ", weather_descriptions[0]);
  }
});

const urlGEO = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.ACCESS_TOKEN}`;
request({ url: urlGEO, json: true }, (error, response) => {
  if (error) {
    console.error("Error geocoding request.");
    return;
  }

  const responseHasfeatures = response.body.features.length;
  if (responseHasfeatures) {
    const centerArray = response.body.features[0].center;
    const longitude = centerArray[0];
    const latitude = centerArray[1];
    console.log("Longitude: ", longitude, "Latitude: ", latitude);
  } else {
    console.error("No features founded.");
  }
});

const geoCode = (address, calback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.ACCESS_TOKEN}`;

  request({ url, json: true },(error,data)=>{
    if(error){
      calback('Unable to connect to location services.')
    }
  });
};

geoCode("León", (error, data) => {});
