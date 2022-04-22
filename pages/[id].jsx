import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import apiService from '../services/apiService';
import LoadingStatus, { loadingStates } from '../components/LoadingStatus';

export default function DetailPage() {
  const [teamMemberDetails, setTeamMemberDetails] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(loadingStates.EMPTY);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getAndSetData = async () => {
      try {
        setLoadingStatus(loadingStates.LOADING);
        const fetchedTeamMember = await apiService.getTeamMemberById('api/fellowship/', id);
        setTeamMemberDetails(fetchedTeamMember);
        setLoadingStatus(loadingStates.LOADED);
      } catch (err) {
        setLoadingStatus(loadingStates.ERROR);
      }
    };

    if (id) getAndSetData();
  }, [id]);

  return (
    <div>
      <Head>
        <title>
          {teamMemberDetails && teamMemberDetails.firstName}
          {' '}
          | Sparkbox Team Availability
        </title>
        <meta name="description" content={`View details about ${teamMemberDetails && teamMemberDetails.firstName}, including their projects, skills, and interests.`} />
      </Head>
      <main>

        <LoadingStatus
          loadingStatus={loadingStatus}
        />

        {loadingStatus === loadingStates.LOADED && (
          <h1>
            Greetings
            {' '}
            {teamMemberDetails.firstName}
            {teamMemberDetails.lastName && ` ${teamMemberDetails.lastName}`}
            !
          </h1>
        )}

      </main>
    </div>
  );
}
