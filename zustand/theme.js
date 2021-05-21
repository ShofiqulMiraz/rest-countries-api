import create from "zustand";
import { devtools } from "zustand/middleware";

const useThemeState = create(
  devtools((set) => ({
    theme: "light",
    setDarkMode: () => set(() => ({ theme: "dark" })),
    setLightMode: () => set(() => ({ theme: "light" })),
  }))
);

export default useThemeState;
