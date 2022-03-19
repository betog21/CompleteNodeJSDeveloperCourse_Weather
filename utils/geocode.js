const request = require("request");

const geoCode = (address, calback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.ACCESS_TOKEN}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      calback("Unable to connect to location services.", undefined);
    } else if (response.body.features.length === 0) {
      calback("Unable to find location. Try another search.", undefined);
    } else {
      const centerArray = response.body.features[0].center;
      const location = response.body.features[0].place_name;
      calback(undefined, {
        latitude: centerArray[1],
        longitude: centerArray[0],
        location,
      });
    }
  });
};

module.exports = geoCode;
