import { useEffect, useState } from 'react';
import Head from 'next/head';

import data from '../lib/data';

export default function Home() {
  const [roster, setRoster] = useState(null);
  const [rosterIDs, setRosterIDs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    data.fetchRoster()
      .then((result) => {
        setRoster(Object.values(result));
        setRosterIDs(Object.keys(result));
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!roster) return <p>No team members could be found.</p>;

  return (
    <div>
      <Head>
        <title>Sparkbox Team Availability</title>
        <meta name="description" content="See which Sparkboxers are available for project work for a given week." />
      </Head>

      <main>
        <h1>Week of April 18 to April 25, 2022</h1>

        <ul>
          {roster.map((member, idx) => (
            <li key={rosterIDs[idx]}>{`${member.firstName}${member.lastName && ` ${member.lastName}`}`}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
