const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (!address) {
  console.error("Please provie an address");
} else {
  geoCode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.error(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.error(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
