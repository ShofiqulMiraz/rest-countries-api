import useCountriesState from "../../zustand/countries";
import styles from "./Countries.module.scss";
import { useState, useEffect } from "react";

const Countries = () => {
  const countries = useCountriesState((state) => state.countries);
  const setAllCountries = useCountriesState((state) => state.setAllCountries);
  useEffect(() => {
    setAllCountries();
  }, []);
  console.log(countries);

  return (
    <div>
      {countries?.map((country, index) => (
        <div key={index}>
          <p> {country.name} </p>
        </div>
      ))}
    </div>
  );
};

export default Countries;
