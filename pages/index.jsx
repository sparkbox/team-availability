import Head from 'next/head';
import apiService from '../services/apiService';
import Filters from '../components/Filters';
import Layout from '../components/Layout';
import CardGrid from '../components/CardGrid';
import WeekSelect from '../components/WeekSelect';
import getUniqueCurrentProjects from '../util/getUniqueCurrentProjects';
import getUniqueRoles from '../util/getUniqueRoles';

const scheme = process.env.NODE_ENV === 'development' ? 'http://' : 'https://';

export default function Home({ teamMembers }) {
  const uniqueRoles = getUniqueRoles(teamMembers);
  const currentProjects = getUniqueCurrentProjects(teamMembers);

  return (
    <Layout
      filters={<Filters uniqueRoles={uniqueRoles} currentProjects={currentProjects} />}
      weekSelect={<WeekSelect />}
    >
      <Head>
        <title>Sparkbox Team Availability</title>
        <meta name="description" content="See which Sparkboxers are available for project work for a given week." />
      </Head>
      <CardGrid
        teamMembers={teamMembers}
      />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const teamMembers = await apiService.getAllTeamMembers(`${scheme}${host}/api/fellowship/`);

  return {
    props: {
      teamMembers,
    },
  };
}
