import "../styles/globals.css";
import "../styles/app.css";
import "../styles/bulma.css";
import Nav from "../components/nav";
import AppProvider from "../components/context";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Nav></Nav>
      <div id="app">
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}

export default MyApp;
