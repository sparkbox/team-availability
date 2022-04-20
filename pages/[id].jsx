import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DetailPage() {
  const [teamMemberDetails, setTeamMemberDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getTeamMemberById = async (url, identifier) => {
      const response = await fetch(url + identifier);
      const data = await response.json();

      setTeamMemberDetails(data[identifier]);
    };

    const getAndSetData = async () => {
      try {
        setIsLoading(true);
        await getTeamMemberById('api/fellowship/', id);
        setIsLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    };

    getAndSetData();
  }, [id]);

  return (
    <div>
      {teamMemberDetails && (
        <Head>
          <title>{`${teamMemberDetails.firstName} | Sparkbox Team Availability`}</title>
          <meta name="description" content={`View details about ${teamMemberDetails.firstName}, including their projects, skills, and interests.`} />
        </Head>
      )}
      <main>

        {isLoading && <p>Loading...</p>}

        {!isLoading && !teamMemberDetails && <p>The team member could not be found.</p>}

        {teamMemberDetails && (
          <h1>
            {`Greetings ${teamMemberDetails.firstName}${teamMemberDetails.lastName && ` ${teamMemberDetails.lastName}`}!`}
          </h1>
        )}
      </main>
    </div>
  );
}
