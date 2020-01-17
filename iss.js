// Will contail most of the logic for fetching the data from each API endpoint 

const request = require('request');

const fetchMyIP = function(callback) {
  let URL = 'https://api.ipify.org?format=json';
  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ipAddress = JSON.parse(body);
    if (data.length === 0) {
      callback("No IP address found, please retry", null);
    } else {
      callback(null, ipAddress.ip);
    }
  });
};


const fetchCoordsByIP = function(ipAddress, callback) {
  
  request(`https://ipvigilante.com/json/${ipAddress}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if(response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }

    const { latitude, longitude} = JSON.parse(body).data;
    callback(null,{latitude, longitude});
  })

}

module.exports = {  fetchCoordsByIP };
