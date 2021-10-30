import styles from "./Search.module.scss";
import useThemeState from "../../zustand/theme";
import { useState, useEffect } from "react";
import useCountriesState from "../../zustand/countries";

const Search = () => {
  const theme = useThemeState((state) => state.theme);

  const setSearchedCountries = useCountriesState(
    (state) => state.setSearchedCountries
  );

  const [SearchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchedCountries(SearchQuery);
  }, 300);
  return () => clearTimeout(delayDebounceFn);
  }, [SearchQuery]);
  
  return (
    <div className={styles.search}>
      <img
        src={
          theme === "light" ? "/search-outline.svg" : "/search-outline-dark.svg"
        }
        alt="search"
        className={styles.icon}
      />
      <input
        type="text"
        placeholder="Search For A Country"
        onChange={(e) => setSearchQuery(e.target.value.trim())}
        className={theme === "light" ? styles.inputLight : styles.inputDark}
      />
    </div>
  );
};

export default Search;
