const imageFlag=document.querySelector("#flag");
const imageCoatOfArms=document.querySelector("#coat-of-arm");
const countryName=document.querySelector("#country-name");

const countryCapital=document.querySelector("#capital");
const countryContinent=document.querySelector("#continent");
const countryCurrency=document.querySelector("#currency");
const countryPopulation=document.querySelector("#population");


async function fetchCountryDate(){

    const urlParams=new URLSearchParams(window.location. search);
const code=urlParams.get("code");

const response=await fetch(`https://restcountries.com/v3.1/alpha/${code}
`);
const country=await response.json();

console.log(country);
updateUI(country[0]);
}

fetchCountryDate();

function updateUI(country){
    countryName.textContent=country.name.official;
    imageFlag.src=country.flags.png;
    imageCoatOfArms.src=country.coatOfArms?.png
    
    countryCapital.textContent=`capital:${country.capital[0]}`;
    countryPopulation.textContent=`population:${country.population}`;
    countryContinent.textContent=`continent:${country.continents[0]}`;

    for(const key in country.currencies) {
        countryCurrency.textContent=`currency: ${country.currencies[key].symbol} ${country.currencies[key].name}`;
        break;
    }

}
