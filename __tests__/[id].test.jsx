import { render, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import { act } from 'react-dom/test-utils';

import DetailPage from '../pages/[id]';

jest.mock('next/router');

describe('DetailPage', () => {
  const MOCK_TEAM_MEMBER = {
    '0001': { firstName: 'Aragorn II', lastName: 'Elessar' },
  };

  useRouter.mockImplementation(() => (
    {
      query: { id: '0001' },
    }
  ));

  global.fetch = jest.fn(() => (
    Promise.resolve({
      json: () => Promise.resolve(MOCK_TEAM_MEMBER),
    })
  ));

  it('renders the h1 element', async () => {
    let container;

    act(() => {
      container = render(<DetailPage />).container;
    });

    await waitFor(() => expect(container.querySelector('h1').textContent).toBe('Greetings Aragorn II Elessar!'));
  });
});
