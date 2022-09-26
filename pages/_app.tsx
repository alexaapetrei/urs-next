import "../styles/app.css";
import "../styles/bulma.css";
import Nav from "../components/nav";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
