import { useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { NavContextProvider } from "../context/NavContext";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  const tagManagerArgs = {
    gtmId: "GTM-KDVRWHN",
    events: {
      sendUserInfo: "userInfo",
    },
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <NavContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavContextProvider>
  );
}

export default MyApp;
