import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../pages/index';

describe('Home', () => {
  const MOCK_TEAM_MEMBERS = {
    '0001': { firstName: 'Aragorn II', lastName: 'Elessar' },
    '0002': { firstName: 'Gandalf', lastName: 'the Grey' },
  };

  global.fetch = jest.fn(() => (
    Promise.resolve({
      json: () => Promise.resolve(MOCK_TEAM_MEMBERS),
    })
  ));

  it('renders 2 li elements if 2 team members are fetched', async () => {
    const { container } = render(<Home />);

    await waitFor(() => expect(container.querySelectorAll('li').length).toBe(2));
  });

  it('renders the expected text', async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Aragorn II Elessar')).toBeInTheDocument();
      expect(screen.getByText('Gandalf the Grey')).toBeInTheDocument();
    });
  });
});
