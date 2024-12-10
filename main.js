const container = document.querySelector(".container");
async function fetchAllCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,cca2"
  );
  const countries = await response.json();
  updateUI(countries);

  console.log(countries);
}

{
  /* <div class="country-country-container">
        <img src="" alt="" class="country-flag" />
        <a class="country-name"></a>
      </div> */
}

function updateUI(countries) {
  countries.innerHTML = "";
  countries.forEach(function (country) {
    const countryContainer = document.createElement("div");
    countryContainer.classList.add("country-container");

    const countryFlag = document.createElement("img");
    countryFlag.classList.add("country-flag");
    countryFlag.src = country.flags.svg;
    countryFlag.alt = country.flags.alt;

    const countryName = document.createElement("a");
    countryName.classList.add("country-name");
    countryName.textContent = country.name.common;
    countryName.href=`country.html?code=${country.cca2}`;

    countryContainer.appendChild(countryFlag);
    countryContainer.appendChild(countryName);

    container.appendChild(countryContainer);
  });
}

fetchAllCountries();
