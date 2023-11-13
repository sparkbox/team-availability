import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FilterProvider } from '../context/FilterContext';
import { ViewProvider } from '../context/ViewContext';
import apiService from '../services/apiService';
import DetailPage, { getStaticProps } from '../pages/[id]';

const MOCK_TEAM_MEMBER = {
  firstName: 'Aragorn',
  lastName: 'Elessar',
  suffix: 'II',
  photo: '/images/mock/aragorn.png',
  currentProjects: [],
  pastProjects: [''],
  funFacts: [],
  weeklyCapacity: 32,
  forecastedHours: [11, 23],
  cohortLeader: 'fellowship',
  cohortParticipant: 'fellowship',
};

jest.mock('../services/apiService');

apiService.getTeamMemberById = jest.fn(() => Promise.resolve(MOCK_TEAM_MEMBER));

describe('DetailPage', () => {
  it('renders the expected text', async () => {
    render(
      <ViewProvider>
        <FilterProvider>
          <DetailPage fetchedTeamMember={MOCK_TEAM_MEMBER} />
        </FilterProvider>
      </ViewProvider>
    );

    await waitFor(() =>
      expect(screen.getByText('Aragorn Elessar II')).toBeInTheDocument()
    );
  });
});

// describe('getStaticProps', () => {
//   it('calls getMemberById', async () => {
//     const context = {
//       params: {
//         id: '0001',
//       },
//       req: {
//         headers: {
//           host: 'localhost:3000',
//         },
//       },
//     };
//     const response = await getStaticProps(context);

//     expect(response).toEqual(
//       expect.objectContaining({
//         props: {
//           fetchedTeamMember: {
//             firstName: 'Aragorn',
//             lastName: 'Elessar',
//             suffix: 'II',
//             photo: '/images/mock/aragorn.png',
//             currentProjects: [],
//             pastProjects: [''],
//             funFacts: [],
//             weeklyCapacity: 32,
//             forecastedHours: [11, 23],
//             cohortLeader: 'fellowship',
//             cohortParticipant: 'fellowship',
//           },
//         },
//       })
//     );
//   });
// });
