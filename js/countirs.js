const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountries(data))
}

const showCountries = (countries) => {
    const divContainer = document.getElementById('countires-container')
    // console.log(countries)
    // for (const country of countries) {
    //     console.log(country)
    // }

    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name:${country.name.common}</h3>
        <h4>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h4>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        
        `;
        divContainer.appendChild(countryDiv);
    });
}

const loadCountryDetail = (code) => {

    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('country code:', code)

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = (country) => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h2>Details: ${country.name.common}</h3>
    <img src="${country.flags.png}">
   
    
    `
    console.log(country)
}

loadCountries();