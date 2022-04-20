import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [teamMembers, setTeamMembers] = useState(null);
  const [teamMemberIds, setTeamMemberIds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllTeamMembers = async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      setTeamMembers(Object.values(data));
      setTeamMemberIds(Object.keys(data));
    };

    const getAndSetData = async () => {
      try {
        setIsLoading(true);
        await getAllTeamMembers('api/fellowship/');
        setIsLoading(false);
      } catch (err) {
        throw new Error(err);
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

        {isLoading && <p>Loading...</p>}

        {!isLoading && !teamMembers && <p>No team members could be found.</p>}

        {teamMembers && (
          <ul>
            {teamMembers.map((member, idx) => (
              <li key={teamMemberIds[idx]}>
                <Link href={`/${teamMemberIds[idx]}`}>
                  {`${member.firstName}${member.lastName && ` ${member.lastName}`}`}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
