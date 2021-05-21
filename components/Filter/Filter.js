import styles from "./Filter.module.scss";
import useThemeState from "../../zustand/theme";

const Filter = () => {
  const theme = useThemeState((state) => state.theme);

  return (
    <div
      className={
        theme === "light"
          ? styles.selectContainerLight
          : styles.selectContainerDark
      }
    >
      <select
        style={
          theme === "light"
            ? { backgroundImage: `url("/chevron-down-outline.svg")` }
            : { backgroundImage: `url("/chevron-down-outline-dark.svg")` }
        }
      >
        <option>Filter by Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
