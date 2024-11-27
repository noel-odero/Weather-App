// check if your not running on production, then configure your environment
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// const API_KEY = process.env.OPENWEATHER_API_KEY;
const API_KEY = 'b172652aa01bef4790b21e6dc71262d4';
// populate the api_key var, with your api key details

const express = require('express');
const axios = require('axios');
// axios works similarly to fetch
const port = 8080;
const app = express();

app.use(express.json());
// set up express to use json, since we will be making api calls
app.use(express.static('public'));
// set express to know where your static folders are found
// that is our html will be served from here

app.post('/weather', (req, res) => {
  const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${req.body.latitude}&lon=${req.body.longitude}&appid=${API_KEY}`;
  axios({
    url: url,
    responseType: 'json',
  })
    .then((data) => {
      console.log(res.json(data.data));
    })
    .catch((err) => console.log(`An unexpected error happened ${err}`));
  // this will send a json version of our data, back to the script.js

});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
