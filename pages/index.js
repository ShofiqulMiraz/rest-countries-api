import Head from "next/head";
import useThemeState from "../zustand/theme";

const Home = () => {
  const theme = useThemeState((state) => state.theme);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1>hello next js 2</h1>
      <h1>its {theme} mode </h1>
    </>
  );
};

export default Home;