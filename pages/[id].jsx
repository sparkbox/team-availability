import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import data from '../lib/data';

export default function DetailPage() {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setIsLoading(true);

    data.fetchDetails(id)
      .then((result) => {
        setDetails(result);
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!details) return <p>The team member could not be found.</p>;

  return (
    <div>
      <Head>
        <title>{`${details.firstName} | Sparkbox Team Availability`}</title>
        <meta name="description" content={`View details about ${details.firstName}, including their projects, skills, and interests.`} />
      </Head>
      <main>
        <h1>
          {`Greetings ${details.firstName}${details.lastName && ` ${details.lastName}`}!`}
        </h1>
      </main>
    </div>
  );
}
