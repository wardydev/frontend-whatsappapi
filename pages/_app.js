import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import ContextProvider from "../src/context";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
