require("dotenv").config();
const request = require("request");

const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESSKEY}&query=37.8267,-122.4233`;

request({ url, json: true }, (error, response) => {
  const { temperature, feelslike, weather_descriptions } =
    response.body.current;
  console.log("Tempeture: ", temperature, "Feels: ", feelslike);
  console.log("Descriptions: ", weather_descriptions[0]);
});
