import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("_app Called");
  return <Component {...pageProps} />;
}

export default MyApp;
