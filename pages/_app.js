/* _app.js has special rules, {...pageProps} cannont be modified. disable eslint to allow */
/* eslint-disable */
import { FilterProvider } from '../context/FilterContext';
import { ViewProvider } from '../context/ViewContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ViewProvider>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </ViewProvider>
  );
}

export default MyApp;
