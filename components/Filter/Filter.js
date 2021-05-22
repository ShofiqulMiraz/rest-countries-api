import styles from "./Filter.module.scss";
import useThemeState from "../../zustand/theme";
import useCountriesState from "../../zustand/countries";
import { useState, useEffect } from "react";

const Filter = () => {
  const theme = useThemeState((state) => state.theme);

  const setFilteredCountries = useCountriesState(
    (state) => state.setFilteredCountries
  );

  const [RegionValue, setRegionValue] = useState("");

  useEffect(() => {
    if (RegionValue.length > 1) {
      setFilteredCountries(RegionValue);
    }
  }, [RegionValue]);

  return (
    <div
      className={
        theme === "light"
          ? styles.selectContainerLight
          : styles.selectContainerDark
      }
    >
      <select
        value={RegionValue}
        onChange={(e) => setRegionValue(e.target.value)}
        style={
          theme === "light"
            ? { backgroundImage: `url("/chevron-down-outline.svg")` }
            : { backgroundImage: `url("/chevron-down-outline-dark.svg")` }
        }
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
