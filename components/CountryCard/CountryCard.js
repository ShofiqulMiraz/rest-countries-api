import styles from "./CountryCard.module.scss";
import useThemeState from "../../zustand/theme";
import { useRouter } from "next/router";

const CountryCard = ({ country }) => {
  const router = useRouter();

  const theme = useThemeState((state) => state.theme);

  const handleClick = () => {
    router.push(`/country/${country.name}`);
  };

  return (
    <div
      className={theme === "light" ? styles.cardLight : styles.cardDark}
      onClick={handleClick}
    >
      <img src={country.flag} alt={country.name} className={styles.flag} />
      <div className={styles.details}>
        <h3> {country.name} </h3>
        <p>
          Population: <span> {country.population} </span>
        </p>
        <p>
          Region: <span> {country.region} </span>
        </p>
        <p>
          Capital: <span> {country.capital} </span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
