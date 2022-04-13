import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  // _app.js has special rules, {...pageProps} cannont be modified. disable eslint to allow
  // eslint-disable-next-line
  return <Component {...pageProps} />;
}

export default MyApp;
