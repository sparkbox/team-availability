/* _app.js has special rules, {...pageProps} cannont be modified. disable eslint to allow */
/* eslint-disable */
import { FilterProvider } from '../context/FilterContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <FilterProvider>
      <Component {...pageProps} />
    </FilterProvider>
  );
}

export default MyApp;
