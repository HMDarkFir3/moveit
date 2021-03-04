//React.js
import { createContext, useEffect, useState, ReactNode } from "react";

//styled-componentes
import { DefaultTheme, ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

//Interface
interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme(): void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemesProvider({ children }) {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const themeLocal = localStorage.getItem("@MoveIt:theme");

    setTheme(themeLocal === "light" ? light : dark);
  }, []);

  function toggleTheme() {
    if (theme.title === "dark") {
      localStorage.setItem("@MoveIt:theme", light.title);
      setTheme(light);
    } else {
      localStorage.setItem("@MoveIt:theme", dark.title);
      setTheme(dark);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
