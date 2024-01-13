//app(parent) => Countries => Country

import React, { useState, useEffect } from "react";
//useState data store korbo && useEffect data fetch korbo

import Countries from "./components/Countries";
import "./App.css";
import Search from "./components/Search";

const url = "https://restcountries.com/v3.1/all";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]); //countries er data golo ni e array te store korbo
  const [filteredCountries, setFilteredCountries] = useState(countries); //duplicate array create kortechi sob data golo ke filteredCountries er modde reke dicchi

  const fetchData = async (url) => {
    setIsLoading(true);  //first e loading hobe
    try {
      const response = await fetch(url);  //ekta response recieve kortechi
      const data = await response.json(); //ta ke json format e convert kortechi
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false); //loading e seshee false hobe mani loading ar dekabe nah
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };


  //fetch kortechi
  useEffect(() => {
    fetchData(url);
  }, []);

  //eikhane name onosary filter kortechi/name ta ke pass ko re dicchi filter ko re jei ta teh click korbo oi ta chara onno golo theke jabe
  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };

  //searchValue jei ta search kortechi arki
  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();  //serchValue ta ke value er modde reke di e lowerCase e convert kortechi
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);  //return korbe holo country name er modde je value golo start hobe ,,,amra ja type kortechi oi onosary
    });
    setFilteredCountries(newCountries); //mani oi golo setFilterCountries er modde reka dibo
  };

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} /> {/** onSearch namer ekta props patcchi */}
      {isLoading && <h2>Loading...</h2>}  {/**loading howar somoy ekta msg show korbe */}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries
          countries={filteredCountries}  //countries ekta props ...basically ei ta Conutries namer component e signal/data patacchi jate data send korte pari
          onRemoveCountry={handleRemoveCountry}  //onRemoveCountry ekta props ei ta ke Countries e patabo,countries abar
          //Country te patabe data koje remove korar jonno
        />
      )}
    </>
  );
};

export default App;
