import styles from "./Filter.module.scss";
import useThemeState from "../../zustand/theme";
import { useState } from "react";

const Filter = () => {
  const theme = useThemeState((state) => state.theme);
  const [RegionValue, setRegionValue] = useState("");
  console.log(RegionValue);

  const handleChange = (e) => {
    setRegionValue(e.target.value);
  };

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
        onChange={handleChange}
        style={
          theme === "light"
            ? { backgroundImage: `url("/chevron-down-outline.svg")` }
            : { backgroundImage: `url("/chevron-down-outline-dark.svg")` }
        }
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
