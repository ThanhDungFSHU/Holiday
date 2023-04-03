const API_KEY = "3503c218-0607-4b54-bf30-7ba87859621d";
const BtnHandler = function () {
  console.log("handle click event");
};

document
  .getElementById("countries-list-btn")
  .addEventListener("click", BtnHandler);

const getCountries = async () => {
  try {
    const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
getCountries();

const renderCountries = async () => {
  try {
    const data = await getCountries();
    const countriesList = document.getElementById("countries-list");
    const ulCountriesList = countriesList.children[2];
    ulCountriesList.innerHTML = "";
    data.countries.forEach((country, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
          <div class="li-wrapper">
              <div class="li-title">${country.name}</div>
              <div>Code: ${country.code}</div>
          </div>`;
      ulCountriesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document.getElementById("countries-list-btn").addEventListener("click", () => {
  renderCountries();
});

document
  .getElementById("languages-list-btn")
  .addEventListener("click", BtnHandler);

const getLanguages = async () => {
  try {
    const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
getLanguages();

const renderLanguages = async () => {
  try {
    const data = await getLanguages();
    const languagesList = document.getElementById("languages-list");
    const ulLanguagesList = languagesList.children[2];
    ulLanguagesList.innerHTML = "";
    data.languages.forEach((languages, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
          <div class="li-wrapper">
              <div class="li-title">${languages.name}</div>
              <div>Code: ${languages.code}</div>
          </div>`;
      ulLanguagesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document.getElementById("languages-list-btn").addEventListener("click", () => {
  renderLanguages();
});

const search = document.getElementById("search-query");
const year = document.getElementById("year-query");
const month = document.getElementById("month-query");
const day = document.getElementById("day-query");
const country = document.getElementById("country-query");
const language = document.getElementById("language-query");

document.getElementById("holidays-btn").addEventListener("click", BtnHandler);

const getHolidays = async () => {
  try {
    let queryString = "";
    if (search.value) {
      queryString += `&search=${search.value}`;
    }
    if (year.value) {
      queryString += `&year=${year.value}`;
    } else {
      queryString += `&year=2021`;
    }
    if (month.value) {
      queryString += `&month=${month.value}`;
    }
    if (day.value) {
      queryString += `&day=${day.value}`;
    }
    if (country.value) {
      queryString += `&country=${country.value}`;
    } else {
      queryString += `&country=VN`;
    }
    if (language.value) {
      queryString += `&language=${language.value}`;
    }

    const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}${queryString}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
getHolidays();

const renderHolidays = async () => {
  try {
    const data = await getHolidays();
    const ulholidaysList = document.getElementById("holiday-ullist");
    ulholidaysList.innerHTML = "";
    console.log(ulholidaysList);
    data.holidays.forEach((holiday, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
          <div class="li-wrapper">
              <div class="li-title">${holiday.name}</div>
              <div>${holiday.weekday.date.name} - ${
        holiday.date
      }</div>              
          </div>`;
      ulholidaysList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document.getElementById("holidays-btn").addEventListener("click", () => {
  renderHolidays();
});
