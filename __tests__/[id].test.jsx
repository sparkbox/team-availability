import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import apiService from '../services/apiService';
import DetailPage, { getServerSideProps } from '../pages/[id]';

const MOCK_TEAM_MEMBER = {
  firstName: 'Aragorn II',
  lastName: 'Elessar',
  photo: '/images/mock/aragorn.png',
};

jest.mock('../services/apiService');

apiService.getTeamMemberById = jest.fn(() => Promise.resolve(MOCK_TEAM_MEMBER));

describe('DetailPage', () => {
  it('renders the expected text', async () => {
    render(
      <DetailPage fetchedTeamMember={MOCK_TEAM_MEMBER} />,
    );

    await waitFor(() => expect(screen.getByText('Greetings Aragorn II Elessar!')).toBeInTheDocument());
  });
});

describe('getServerSideProps', () => {
  it('calls getMemberById', async () => {
    const context = {
      params: {
        id: '0001',
      },
      req: {
        headers: {
          host: 'localhost:3000',
        },
      },
    };
    const response = await getServerSideProps(context);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          fetchedTeamMember: {
            firstName: 'Aragorn II',
            lastName: 'Elessar',
            photo: '/images/mock/aragorn.png',
          },
        },
      }),
    );
  });
});
