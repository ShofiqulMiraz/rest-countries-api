import styles from "./Search.module.scss";
import useThemeState from "../../zustand/theme";

const Search = () => {
  const theme = useThemeState((state) => state.theme);
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
        className={theme === "light" ? styles.inputLight : styles.inputDark}
      />
    </div>
  );
};

export default Search;
