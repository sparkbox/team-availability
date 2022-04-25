import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/router';

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

  it('renders the expected test', async () => {
    render(<DetailPage />);

    await waitFor(() => expect(screen.getByText('Greetings Aragorn II Elessar!')).toBeInTheDocument());
  });
});
