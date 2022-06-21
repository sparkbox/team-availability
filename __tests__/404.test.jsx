import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FilterProvider } from '../context/FilterContext';
import { ViewProvider } from '../context/ViewContext';
import PageNotFound from '../pages/404';

describe('PageNotFound', () => {
  it('renders the expected text', async () => {
    render(
      <ViewProvider>
        <FilterProvider>
          <PageNotFound />
        </FilterProvider>
      </ViewProvider>
    );

    await waitFor(() => expect(screen.getByText('404')).toBeInTheDocument());
  });
});
