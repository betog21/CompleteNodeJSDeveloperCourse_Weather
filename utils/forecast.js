require("dotenv").config();
const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESSKEY}&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to conect to weatherstack.", undefined);
    } else if (body.error) {
      callback("Error from the API weather.", undefined);
    } else {
      const { temperature, feelslike, weather_descriptions } = body.current;
      const data = {
        temperature,
        feelslike,
        weather_descriptions,
        Descriptions: weather_descriptions[0],
      };
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
