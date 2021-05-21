import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";

const useCountriesState = create(
  devtools((set) => ({
    countries: null,
    setAllCountries: async () => {
      try {
        const res = await axios.get(
          `https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag`
        );
        const countries = res.data;
        set(() => ({ countries }));
      } catch (error) {
        console.log(error.response.data);
      }
    },
    setSearchedCountries: async (term) => {
      try {
        const res = await axios.get(
          `https://restcountries.eu/rest/v2/name/${term}?fields=name;population;capital;region;flag`
        );
        const countries = res.data;
        set(() => ({ countries }));
      } catch (error) {
        console.log(error.response.data);
      }
    },
  }))
);

export default useCountriesState;
