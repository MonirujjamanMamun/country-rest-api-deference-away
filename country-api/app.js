const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => getCountry(data))
}
const getCountry = countries =>{
    const getSingleCountry = countries.map(country => displayCountry(country))
    const singleCountry = getSingleCountry.join(' ');

    const container = document.getElementById('display-country');
        container.innerHTML=singleCountry

}


const displayCountry = (country) =>{
    const {name, flags, area, population} =country;
        return `<div class='single-country'>
            <h1>Name : ${name.common}</h1>
            <h3>Area : ${area}</h3>
            <p>Population : ${population}</p>
            <img src="${flags.png}">
        </div>`;
}


loadCountry()