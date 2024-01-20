import styles from "./CountryDetails.module.scss";
import Link from "next/link";
import useThemeState from "../../zustand/theme";

const CountryDetails = ({ details }) => {
    const theme = useThemeState((state) => state.theme);
    return (
        <div className={styles.container}>
            <Link href="/">
                {theme === "light" ? (
                    <div className={styles.backLight}>
                        <img src="/arrow-back-outline.svg" alt="back" />
                        <span>Back</span>
                    </div>
                ) : (
                    <div className={styles.backDark}>
                        <img src="/arrow-back-outline-dark.svg" alt="back" />
                        <span>Back</span>
                    </div>
                )}
            </Link>
            <div className={styles.details}>
                <div className={styles.left}>
                    <img src={details.flag} alt={details.name} className={styles.flag} />
                </div>
                <div className={styles.right}>
                    <h1> {details.name} </h1>
                    <div className={styles.description}>
                        <div className={styles.description_left}>
                            <p>
                                Native Name: <span> {details.nativeName} </span>
                            </p>
                            <p>
                                Population: <span> {details.population} </span>
                            </p>
                            <p>
                                Region: <span> {details.region} </span>
                            </p>
                            <p>
                                Sub Region: <span> {details.subregion} </span>
                            </p>
                            <p>
                                Capital: <span> {details.capital} </span>
                            </p>
                        </div>
                        <div className={styles.description_right}>
                            <p>
                                Top Level Domain: <span> {details.topLevelDomain[0]} </span>
                            </p>
                            <p>
                                Currencies: <span> {details.currencies[0].name} </span>
                            </p>
                            <p>
                                Languages:
                                <span>
                                    {details.languages.map((language, index) => (
                                        <span key={index}> {language.name} </span>
                                    ))}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.border_countries}>
                        <p>
                            Border Countries:
                            <span>
                                {details.borders && details.borders.length ? (
                                    <>
                                        {details.borders.map((country, index) => (
                                            <span key={index}> {country} </span>
                                        ))}
                                    </>
                                ) : (
                                    <span> No Border Countries </span>
                                )}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;
