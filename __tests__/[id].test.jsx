import { render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import DetailPage from '../pages/[id]';
import data from '../lib/data';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: '{ id: 0001 }',
    };
  },
}));

jest.mock('../lib/data');

describe('DetailPage', () => {
  const MOCK_TEAM_MEMBER = {
    firstName: 'Aragorn II', lastName: 'Elessar',
  };
  data.getTeamMemberById.mockResolvedValue(MOCK_TEAM_MEMBER);

  it('calls data.getTeamMembersById', async () => {
    act(() => {
      render(<DetailPage />);
    });

    await waitFor(() => expect(data.getTeamMemberById).toHaveBeenCalled());
  });

  it('renders the h1 element', async () => {
    let container;

    act(() => {
      container = render(<DetailPage />).container;
    });

    await waitFor(() => expect(container.querySelector('h1').textContent).toBe('Greetings Aragorn II Elessar!'));
  });
});
