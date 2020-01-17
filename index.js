// WIll run our main fetch function

// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {

//     console.log("It didn't work!!", error);
//     return;

//   }

//   console.log('It worked! Returned IP: ', ip);

// });

const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('66.207.199.230', (error, coords) => {
  if (error) {
    console.log("It didn't work!!", error);
    return;
    
  } else {
    console.log("It worked! Returned Data", coords);
  }
});