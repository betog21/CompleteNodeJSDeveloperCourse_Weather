const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (!address) {
  console.error("Please provie an address");
} else {
  geoCode(address, (error, data) => {
    if (error) {
      return console.error(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.error(error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
