import useCountriesState from "../../zustand/countries";
import styles from "./Countries.module.scss";
import { useEffect } from "react";
import CountryCard from "../CountryCard/CountryCard";
import Loading from "../Loading/Loading";

const Countries = () => {
    const countries = useCountriesState((state) => state.countries);
    const setAllCountries = useCountriesState((state) => state.setAllCountries);
    const loading = useCountriesState((state) => state.loading);

    useEffect(() => {
        setAllCountries();
    }, []);

    return loading ? (
        <div className={styles.loading}>
            <Loading />
        </div>
    ) : (
        <div className={styles.countryGrid}>
            {countries && countries.map((country, index) => <CountryCard key={index} country={country} />)}
        </div>
    );
};

export default Countries;
