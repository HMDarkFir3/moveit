//Next.js
import { Provider } from "next-auth/client";

//Context
import { ThemesProvider } from "../contexts/ThemeContext";

//Style
import { GlobalStyle } from "../styles/global";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

function MyApp({ Component, pageProps }) {
  return (
    <ThemesProvider>
      <GlobalStyle />
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ThemesProvider>
  );
}

export default MyApp;
