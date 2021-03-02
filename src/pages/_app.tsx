//Next.js
import { Provider } from "next-auth/client";

//Style
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
