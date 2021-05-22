import useCountriesState from "../../zustand/countries";
import styles from "./Countries.module.scss";
import { useEffect } from "react";
import CountryCard from "../CountryCard/CountryCard";

const Countries = () => {
  const countries = useCountriesState((state) => state.countries);

  const setAllCountries = useCountriesState((state) => state.setAllCountries);

  useEffect(() => {
    setAllCountries();
  }, []);

  return (
    <div className={styles.countryGrid}>
      {countries?.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
};

export default Countries;
