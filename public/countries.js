/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const allContries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua-and-Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia-and-Herzegovina',
  'Botswana',
  'Brazil',
  'British-Virgin-Islands',
  'Brunei',
  'Bulgaria',
  'Burkina-Faso',
  'Burundi',
  'Cabo-Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'CAR',
  'Caribbean-Netherlands',
  'Cayman-Islands',
  'Chad',
  'Channel-Islands',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa-Rica',
  'Croatia',
  'Cuba',
  'Cura&ccedil;ao',
  'Cyprus',
  'Czechia',
  'Denmark',
  'Diamond-Princess',
  'Diamond-Princess-',
  'Djibouti',
  'Dominica',
  'Dominican-Republic',
  'DRC',
  'Ecuador',
  'Egypt',
  'El-Salvador',
  'Equatorial-Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Faeroe-Islands',
  'Falkland-Islands',
  'Fiji',
  'Finland',
  'France',
  'French-Guiana',
  'French-Polynesia',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong-Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle-of-Man',
  'Israel',
  'Italy',
  'Ivory-Coast',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'MS-Zaandam',
  'MS-Zaandam-',
  'Myanmar',
  'Namibia',
  'Nepal',
  'Netherlands',
  'New-Caledonia',
  'New-Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North-Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua-New-Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto-Rico',
  'Qatar',
  'R&eacute;union',
  'Romania',
  'Russia',
  'Rwanda',
  'S-Korea',
  'Saint-Kitts-and-Nevis',
  'Saint-Lucia',
  'Saint-Martin',
  'Saint-Pierre-Miquelon',
  'San-Marino',
  'Sao-Tome-and-Principe',
  'Saudi-Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra-Leone',
  'Singapore',
  'Sint-Maarten',
  'Slovakia',
  'Slovenia',
  'Somalia',
  'South-Africa',
  'South-Sudan',
  'Spain',
  'Sri-Lanka',
  'St-Barth',
  'St-Vincent-Grenadines',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Trinidad-and-Tobago',
  'Tunisia',
  'Turkey',
  'Turks-and-Caicos',
  'UAE',
  'Uganda',
  'UK',
  'Ukraine',
  'Uruguay',
  'US-Virgin-Islands',
  'USA',
  'Uzbekistan',
  'Vatican-City',
  'Venezuela',
  'Vietnam',
  'Western-Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const displaySearchedCountry = (
  countryN,
  allPopulation,
  newDeaths,
  totalDeaths,
  tests
) => {
  const results = document.querySelector('.results');
  const allTests = document.createElement('h2');
  const totalDeathsCount = document.createElement('h2');
  const countryName = document.createElement('h2');
  const population = document.createElement('h2');
  const allDeaths = document.createElement('h2');
  allTests.className = 'results_text';
  allDeaths.className = 'results_text';
  countryName.className = 'results_text';
  population.className = 'results_text';
  totalDeathsCount.className = 'results_text';

  //--

  countryName.textContent = 'Country Name:   ' + countryN;
  population.textContent = 'Population: ' + allPopulation;
  allDeaths.textContent = `New Deaths: ${
    newDeaths ? newDeaths : 'not confirmed'
  }`;
  totalDeathsCount.textContent = 'Total Deaths: ' + totalDeaths;
  allTests.textContent = 'Total Tests: ' + tests;

  results.appendChild(countryName);
  results.appendChild(population);
  results.appendChild(allDeaths);
  results.appendChild(totalDeathsCount);
  results.appendChild(allTests);
};

const printColors = (length) => {
  let x = 0;
  let colors = [];
  for (let i = 0; i < length; i += 1) {
    x += 10;
    colors.push(`rgba(255, ${x}, ${x}, 0.4)`);
  }
  return colors;
};

const bordercolor = (length) => {
  let colors = [];
  for (let i = 0; i < length; i += 1) {
    colors.push('rgba(255, 33,33, 1)');
  }
  return colors;
};

const createChart = () => {
  axios
    .get('https://covid-193.p.rapidapi.com/statistics', {
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '', //Get the key at https://rapidapi.com/,
        useQueryString: true,
      },
    })
    .then((results) => {
      const sortedBy = results.data.response.sort((a, b) => {
        return b.deaths.total - a.deaths.total;
      });
      const filters = [
        'Europe',
        'All',
        'North-America',
        'South-America',
        'Asia',
        'Africa',
      ];

      let newResults = sortedBy.filter((eachCountrie) => {
        return !filters.includes(eachCountrie.country);
      });
      newResults = newResults.slice(0, 10);

      const allCountries = newResults.reduce((arr, each) => {
        arr.push(each.country);
        return arr;
      }, []);

      const allDeaths = newResults.reduce((arr, each) => {
        arr.push(each.deaths.total);
        return arr;
      }, []);

      var ctx = document.getElementById('myChart').getContext('2d');
      return new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [...allCountries],
          datasets: [
            {
              label: 'COVID 19 death count',
              data: [...allDeaths],
              backgroundColor: [...printColors(newResults.length)],
              borderColor: [...bordercolor(newResults.length)],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    });
};

createChart();
