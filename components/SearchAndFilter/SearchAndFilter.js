import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import styles from "./SearchAndFilter.module.scss";

const SearchAndFilter = () => {
  return (
    <section className={styles.search_and_filter}>
      <Search />
      <Filter />
    </section>
  );
};

export default SearchAndFilter;
