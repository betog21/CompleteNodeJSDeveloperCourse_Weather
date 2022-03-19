const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geoCode("Boston", (error, data) => {
  console.log(data);
});

forecast(37.8267, -122.4233, (error, data) => {
  console.log(data);
});
