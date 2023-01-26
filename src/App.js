import { useEffect, useState } from "react";

function App() {
  let [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  });
  return (
    <div className="App">
      {countries.map((country) => console.log(country))}
    </div>
  );
}

/*<div key={country.cca2}>Hello</div>*/

export default App;
