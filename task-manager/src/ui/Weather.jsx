import { useEffect, useState } from "react";

export default function Weather() {
  const [location, setLocation] = useState("");
  const [locationInfo, setLocationInfo] = useState({});
  console.log(111);

  //   useEffect(
  //     function () {
  //       async function loadData() {
  //         try {
  //           const response = await fetch(
  //             `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
  //           );

  //           //   console.log(response);
  //           const {
  //             results: [
  //               { name, country, country_code, latitude, longitude, timezone },
  //             ],
  //           } = await response.json();
  //           console.log(country, country_code, latitude, longitude, timezone);
  //           setLocationInfo({
  //             country: country,
  //             countryCode: country_code,
  //           });

  //           const weatherResponse = await fetch(
  //             `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
  //           );
  //           console.log(2222);

  //           const weatherData = await weatherResponse.json();
  //           console.log(weatherData);
  //           setLocation("");
  //         } catch (err) {
  //           console.error(err);
  //         }
  //       }

  //       if (location.length < 3) return;
  //       loadData();
  //     },
  //     [location]
  //   );

  function handleChange(value) {
    async function loadData() {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${value}`
        );

        //   console.log(response);
        const {
          results: [
            { name, country, country_code, latitude, longitude, timezone },
          ],
        } = await response.json();
        console.log(country, country_code, latitude, longitude, timezone);
        setLocationInfo({
          country: country,
          countryCode: country_code,
        });

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
        );
        console.log(2222);

        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        // setLocation("");
      } catch (err) {
        console.error(err);
      }
    }

    setLocation(value);
    if (location.length < 3) return;
    loadData();
  }
  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBox location={location} onLocationChange={handleChange} />
      {Object.keys(locationInfo).length > 0 && (
        <DisplayLocationInfo locationInfo={locationInfo} />
      )}
    </div>
  );
}

function DisplayLocationInfo({ locationInfo }) {
  return (
    <h2>
      {locationInfo.country}, {locationInfo.countryCode}
    </h2>
  );
}

function SearchBox({ location, onLocationChange }) {
  return (
    <input
      value={location}
      onChange={(e) => onLocationChange(e.target.value)}
    />
  );
}
