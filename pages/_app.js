import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { NavContextProvider } from "../context/NavContext";

function MyApp({ Component, pageProps }) {
  return (
    <NavContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavContextProvider>
  );
}

export default MyApp;
