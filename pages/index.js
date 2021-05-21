import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import SearchAndFilter from "../components/SearchAndFilter/SearchAndFilter";
import useThemeState from "../zustand/theme";

const Home = () => {
  const theme = useThemeState((state) => state.theme);

  return (
    <>
      <Head>
        <title>HomePage | REST Countries</title>
      </Head>
      <Navbar />
      <SearchAndFilter />
      {theme === "light" ? (
        <style jsx global>{`
          body {
            background-color: #fafafa;
            color: black;
          }
        `}</style>
      ) : (
        <style jsx global>{`
          body {
            background-color: #202d36;
            color: white;
          }
          input:focus {
            color: white;
          }
          ::placeholder {
            color: white;
          }
        `}</style>
      )}
    </>
  );
};

export default Home;
