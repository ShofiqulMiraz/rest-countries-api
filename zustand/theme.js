import create from "zustand";

const useThemeState = create((set) => ({
  theme: "light",
  setDarkMode: () => set(() => ({ theme: "dark" })),
  setLightMode: () => set(() => ({ theme: "light" })),
}));

export default useThemeState;
