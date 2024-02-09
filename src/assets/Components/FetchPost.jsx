import React, { useState, useEffect } from "react";
import "./FetchPost.scss";
import searchIcon from "../search.svg";
import FetchDisplay from "./FetchDisplay";

const FetchPost = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log("fetch");
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTermLowerCase)
    );
    setFilteredCountries(filtered);
  };

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setSelectedRegion(selectedRegion);
    if (selectedRegion === "") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(
        (country) => country.region === selectedRegion
      );
      setFilteredCountries(filtered);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Remove the dependency array if you don't have any dependencies

  return (
    <div className="fetch-body">
      <div className="search-limit">
        <div className="search-country-name">
          <button type="submit">
            <img src={searchIcon} alt="" />
          </button>
          <form onSubmit={handleSearchSubmit} className="search">
            <input
              className="place-holder"
              type="text"
              placeholder="Search for a country....."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>

        <div className="select-continent">
          <select
            name="region"
            id="region"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="country-holder">
        <FetchDisplay countries={filteredCountries} />
      </div>
    </div>
  );
};

export default FetchPost;
