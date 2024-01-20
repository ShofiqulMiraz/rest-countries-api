import axios from "axios";
import Head from "next/head";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import Navbar from "../../components/Navbar/Navbar";
import useThemeState from "../../zustand/theme";

const CountryDetailsPage = ({ details }) => {
    const theme = useThemeState((state) => state.theme);

    return (
        <>
            <Head>
                <title> {details.name} </title>
            </Head>
            <Navbar />
            <CountryDetails details={details} />
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
                `}</style>
            )}
        </>
    );
};

export default CountryDetailsPage;

export const getServerSideProps = async (ctx) => {
    const res = await axios.get(`https://restcountries.com/v2/name/${ctx.query.name}`);
    const details = res.data[0];

    return {
        props: {
            details,
        },
    };
};
