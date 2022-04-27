import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PageNotFound from '../pages/404';

describe('PageNotFound', () => {
  it('renders the expected text', async () => {
    render(<PageNotFound />);

    await waitFor(() => expect(screen.getByText('404')).toBeInTheDocument());
  });
});
