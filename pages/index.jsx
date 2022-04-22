import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import apiService from '../services/apiService';
import LoadingStatus, { loadingStates } from '../components/LoadingStatus';

export default function Home() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(loadingStates.EMPTY);

  useEffect(() => {
    const getAndSetData = async () => {
      try {
        setLoadingStatus(loadingStates.LOADING);
        const fetchedTeamMembers = await apiService.getAllTeamMembers('api/fellowship/');
        setTeamMembers(fetchedTeamMembers);
        setLoadingStatus(loadingStates.LOADED);
      } catch (err) {
        setLoadingStatus(loadingStates.ERROR);
      }
    };

    getAndSetData();
  }, []);

  return (
    <div>
      <Head>
        <title>Sparkbox Team Availability</title>
        <meta name="description" content="See which Sparkboxers are available for project work for a given week." />
      </Head>

      <main>
        <h1>Week of April 18 to April 25, 2022</h1>

        <LoadingStatus
          loadingStatus={loadingStatus}
        />

        <ul>
          {loadingStatus === loadingStates.LOADED && teamMembers.map((member) => (
            <li key={member.id}>
              <Link href={`/${member.id}`}>
                {member.firstName + (member.lastName && ` ${member.lastName}`)}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
