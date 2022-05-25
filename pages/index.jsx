import Head from 'next/head';
import { FilterProvider } from '../context/FilterContext';
import apiService from '../services/apiService';
import Layout from '../components/Layout';
import SelectControl from '../components/SelectControl';
import TradingCardGrid from '../components/TradingCardGrid';
import getUniqueCurrentProjects from '../util/getUniqueCurrentProjects';
import { getDate } from '../util/getDate';
import OverviewFilters from '../components/OverviewFilters';

export default function Home({ teamMembers }) {
  const { weekStart, weekEnd } = getDate();
  const currentProjects = getUniqueCurrentProjects(teamMembers);

  return (
    <FilterProvider>
      <Layout>
        <Head>
          <title>Sparkbox Team Availability</title>
          <meta name="description" content="See which Sparkboxers are available for project work for a given week." />
        </Head>
        <h1>{`Week of ${weekStart} to ${weekEnd}`}</h1>
        <SelectControl
          currentProjects={currentProjects}
        />
        <OverviewFilters />
        <TradingCardGrid
          teamMembers={teamMembers}
        />
      </Layout>
    </FilterProvider>
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
