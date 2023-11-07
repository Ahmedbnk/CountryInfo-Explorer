let searchBtn = document.querySelector("button");
let countryInput = document.querySelector("input");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      const countryData = data[0];
      console.log(countryData);
      console.log(countryData.area);
      console.log(countryData.capital[0]);
      console.log(countryData.flags.svg);
      console.log(countryData.name.common);
      console.log(countryData.continents[0]);
      console.log(
        countryData.currencies[Object.keys(countryData.currencies)].name
      );
      console.log(
        countryData.currencies[Object.keys(countryData.currencies)].symbol
      );
      console.log(
        Object.values(countryData.languages).toString().split(",").join(" , ")
      );

      result.innerHTML = ` <img src="${
        countryData.flags.svg
      }" alt="country image" id="image">
      <h2>${countryData.name.common}</h2>
      <div class="data">
      <h4>Capital:</h4>
      <span>${countryData.capital[0]} </span>
     </div>
     <div class="data">
      <h4>Continent:</h4>
      <span>${countryData.continents[0]} </span>
     </div>
     <div class="data">
     <h4>Languages:</h4>
     <span>${Object.values(countryData.languages)
       .toString()
       .split(",")
       .join(" , ")} </span>
    </div>
     <div class="data">
      <h4>Currencies:</h4>
      <span>${`${
        countryData.currencies[Object.keys(countryData.currencies)].name
      }  ${
        countryData.currencies[Object.keys(countryData.currencies)].symbol
      }`} </span>
     </div>
     </div>
     <div class="data">
      <h4>Area:</h4>
      <span> ${countryData.area} km² </span>
     </div>
     
     `;
    });
});
