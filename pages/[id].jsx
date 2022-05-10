import Head from 'next/head';
import SkipToContent from '../components/SkipToContent';
import apiService from '../services/apiService';

export default function DetailPage({ fetchedTeamMember }) {
  return (
    <div>
      <Head>
        <title>
          {fetchedTeamMember.firstName}
          {' '}
          | Sparkbox Team Availability
        </title>
        <meta name="description" content={`View details about ${fetchedTeamMember && fetchedTeamMember.firstName}, including their projects, skills, and interests.`} />
      </Head>
      <SkipToContent />

      <main id="main-content">
        <h1>
          Greetings
          {' '}
          {fetchedTeamMember.firstName}
          {fetchedTeamMember.lastName && ` ${fetchedTeamMember.lastName}`}
          !
        </h1>
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
