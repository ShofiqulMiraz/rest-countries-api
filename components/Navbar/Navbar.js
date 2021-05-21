import styles from "./Navbar.module.scss";
import useThemeState from "../../zustand/theme";

const Navbar = () => {
  const theme = useThemeState((state) => state.theme);
  const setDarkMode = useThemeState((state) => state.setDarkMode);
  const setLightMode = useThemeState((state) => state.setLightMode);
  return (
    <nav className={theme === "light" ? styles.navLight : styles.navDark}>
      <h1 className={styles.logo}> Where in the world? </h1>

      {theme === "light" ? (
        <div className={styles.theme} onClick={setDarkMode}>
          <img src="/moon-outline.svg" alt="dark mode" />
          <p>Dark Mode</p>
        </div>
      ) : (
        <div className={styles.theme} onClick={setLightMode}>
          <img src="/sunny-outline.svg" alt="light mode" />
          <p>Light Mode</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
