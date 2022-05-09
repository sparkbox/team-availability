import Head from 'next/head';
import SkipToContent from '../components/SkipToContent';
import TradingCardImage from '../components/TradingCardImage';
import apiService from '../services/apiService';
import getFullName from '../util/getFullName';

export default function DetailPage({ fetchedTeamMember }) {
  const fullName = getFullName(fetchedTeamMember);

  return (
    <div>
      <Head>
        <title>
          {fullName}
          {' '}
          | Sparkbox Team Availability
        </title>
        <meta name="description" content={`View details about ${fullName}, including their projects, skills, and interests.`} />
      </Head>
      <SkipToContent />

      <main id="main-content">
        <h1>
          Greetings
          {' '}
          {fullName}
          !
        </h1>

        <TradingCardImage
          imageUrl={fetchedTeamMember.photo}
          hours={fetchedTeamMember.forecastedHours}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps({ params, req }) {
  const { id } = params;
  const { host } = req.headers;
  const scheme = process.env.NODE_ENV === 'development' ? 'http://' : 'https://';
  const baseUrl = `${scheme}${host}/api/fellowship/`;
  const fetchedTeamMember = await apiService.getTeamMemberById(baseUrl, id);

  if (!fetchedTeamMember) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      fetchedTeamMember,
    },
  };
}
