import React from "react";
import "./FetchDisplay.scss";

const FetchDisplay = ({ countries }) => {
  return (
    <div className="parent">
      <div className="country-grid">
        {countries ? (
          countries.map((country, index) => {
            return (
              <div key={index} className="contry-card">
                {country.flags && country.flags.svg ? (
                  <img
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                    // style={{ width: "200px", height: "200px" }}
                  />
                ) : (
                  <p>No flag available</p>
                )}
                <p>{country.name.common}</p>
                <p>POPULATION: {country.population}</p>
                <p>REGION: {country.region}</p>
                <p>CAPITAL: {country.capital}</p>
              </div>
            );
          })
        ) : (
          <div>
            <p>Loading😏😏😏😏...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchDisplay;
