/* eslint-disable no-undef */
const searchData = allContries;
const inputData = document.querySelector('.form_input');
const autoCorrect = document.querySelector('.auto_correct');

const autoCorrectResults = (countryN) => {
  const results = document.querySelector('.auto_correct');
  const countryName = document.createElement('h2');
  countryName.className = 'results_country_text';
  countryName.id = countryN;
  countryName.textContent = countryN;
  results.appendChild(countryName);
  countryName.addEventListener('click', (e) => {
    inputData.value = e.target.textContent;
    autoCorrect.innerHTML = '';
    autoCorrect.style.display = 'none';
    axios
      .post(`http://localhost:3000/covid_data?search=${inputData.value}`)
      .then((r) => {
        inputData.value = '';
        const response = r.data;
        displaySearchedCountry(
          response.country,
          response.population,
          response.deaths.new,
          response.deaths.total,
          response.tests.total
        );
      });
  });
};

inputData.addEventListener('input', (e) => {
  autoCorrect.innerHTML = '';
  document.querySelector('.results').innerHTML = '';
  let results = searchData.filter((country) => {
    return country.toLowerCase().startsWith(e.target.value.toLowerCase());
  });
  if (results.length > 8) {
    results = results.slice(0, 7);
  }
  results.forEach((entry) => {
    autoCorrectResults(entry);
  });

  if (!results.length) {
    autoCorrect.style.display = 'none';
  } else {
    autoCorrect.style.display = 'block';
  }
  if (!e.target.value) {
    autoCorrect.innerHTML = '';
    autoCorrect.style.display = 'none';
  }
});
