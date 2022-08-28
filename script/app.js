

const displayCountries = (countries)=>{
    const container = document.getElementById('countries')
    countries.forEach(country => {
        const card = document.createElement('div')
        card.innerHTML = `
        <img src="${country.flags.png}" alt="">
        <h1>Name: ${country.name.common}</h1>
        <h3>Capital: ${country.capital?country.capital[0]:'No Capital'}</h3>
        <h4>Population: ${country.population}</h4>
        <button onclick="loadRegion('${country.cca2}')">Region</button>`
        card.classList.add("card")
        container.appendChild(card)
    });
   
}

const loadRegion = (code)=>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayRegion(data[0]))

}
const displayRegion = (country)=>{
    alert(`${country.region}`)
}


const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries()