import Head from 'next/head';
import apiService from '../services/apiService';
import Layout from '../components/Layout';
import TradingCard from '../components/TradingCard';
import getFullName from '../util/getFullName';

export default function Home({ teamMembers }) {
  return (
    <Layout>
      <Head>
        <title>Sparkbox Team Availability</title>
        <meta name="description" content="See which Sparkboxers are available for project work for a given week." />
      </Head>
      <h1>Week of April 18 to April 25, 2022</h1>
      <ul>
        {teamMembers && teamMembers.map((member) => (
          <li key={member.id}>
            <TradingCard
              photo={member.photo}
              weeklyCapacity={member.weeklyCapacity}
              forecastedHours={member.forecastedHours}
              name={getFullName(member)}
              jobTitle={member.jobTitle}
              id={member.id}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const scheme = process.env.NODE_ENV === 'development' ? 'http://' : 'https://';
  const teamMembers = await apiService.getAllTeamMembers(`${scheme}${host}/api/fellowship/`);
  return {
    props: {
      teamMembers,
    },
  };
}
