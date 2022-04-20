import { render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Home from '../pages/index';
import data from '../lib/data';

jest.mock('../lib/data');

describe('Home', () => {
  const MOCK_TEAM_MEMBERS = {
    '0001': { firstName: 'Aragorn II', lastName: 'Elessar' },
    '0002': { firstName: 'Gandalf', lastName: 'the Grey' },
  };
  data.getAllTeamMembers.mockResolvedValue(MOCK_TEAM_MEMBERS);

  it('calls data.getAllTeamMembers', async () => {
    act(() => {
      render(<Home />);
    });

    await waitFor(() => expect(data.fetchRoster).toHaveBeenCalled());
  });

  it('renders at least 1 li element', async () => {
    let container;

    act(() => {
      container = render(<Home />).container;
    });

    await waitFor(() => expect(container.querySelector('li').textContent).toBe('Aragorn II Elessar'));
  });
});
