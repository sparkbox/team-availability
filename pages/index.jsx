import Head from 'next/head';
import apiService from '../services/apiService';
import Layout from '../components/Layout';
import TradingCardGrid from '../components/TradingCardGrid';
import { getDate } from '../util/getDate';

export default function Home({ teamMembers }) {
  const { weekStart, weekEnd } = getDate();
  return (
    <Layout>
      <Head>
        <title>Sparkbox Team Availability</title>
        <meta name="description" content="See which Sparkboxers are available for project work for a given week." />
      </Head>
      <h1>{`Week of ${weekStart} to ${weekEnd}`}</h1>

      <TradingCardGrid
        teamMembers={teamMembers}
      />
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
