import Head from 'next/head';
import apiService from '../services/apiService';
import getFullName from '../util/getFullName';
import { getSkills } from '../util/getSkills';
import { getPastClients } from '../util/getPastClients';
import CurrentProjects from '../components/CurrentProjects';
import Layout from '../components/Layout';
import PersonalBio from '../components/PersonalBio';
import SkillsGrid from '../components/SkillsGrid';
import TradingCardImage from '../components/TradingCardImage';
import PastClients from '../components/PastClients';
import Show from '../components/Show';

export default function DetailPage({ fetchedTeamMember }) {
  const fullName = getFullName(fetchedTeamMember);
  const skills = getSkills(fetchedTeamMember);
  const pastClients = getPastClients(fetchedTeamMember);
  return (
    <Layout>
      <Head>
        <title>{`${fullName} | Sparkbox Team Availability`}</title>
        <meta name="description" content={`View details about ${fullName}, including their projects, skills, and interests.`} />
      </Head>
      <h1>{`Greetings ${fullName}!`}</h1>

      <TradingCardImage
        imageUrl={fetchedTeamMember.photo}
        forecastedHours={fetchedTeamMember.forecastedHours}
        weeklyCapacity={fetchedTeamMember.weeklyCapacity}
      />

      <CurrentProjects
        currentProjects={fetchedTeamMember.currentProjects}
      />

      <SkillsGrid skilldata={skills} />

      <PersonalBio
        name={fetchedTeamMember.firstName}
        bio={fetchedTeamMember.bio}
      />
      <Show when={pastClients}>
        <PastClients pastClients={pastClients} />
      </Show>
    </Layout>
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
