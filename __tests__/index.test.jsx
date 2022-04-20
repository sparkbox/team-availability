import { render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

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

  it('renders the first li element', async () => {
    let container;

    act(() => {
      container = render(<Home />).container;
    });

    await waitFor(() => expect(container.querySelector('li').textContent).toBe('Aragorn II Elessar'));
  });
});
