const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/covid_data', (req, res) => {
  let searchResults = req.query.search;
  if (!searchResults) {
    searchResults = 'China';
  }

  //Get a key
  const Allheaders = {
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': '', //Get a key at https://rapidapi.com
    'content-type': 'application/octet-stream',
    useQueryString: true,
  };

  axios
    .get('https://covid-193.p.rapidapi.com/statistics', {
      headers: Allheaders,
    })
    .then((response) => {
      const querySelected = response.data.response.find(
        (countryName) =>
          countryName.country.toLowerCase() === searchResults.toLowerCase()
      );
      res.json(querySelected);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use(express.static(path.join(__dirname, '/public')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on: http://localhost:3000');
});
