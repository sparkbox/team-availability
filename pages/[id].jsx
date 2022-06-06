import Head from 'next/head';
import apiService from '../services/apiService';
import getFullName from '../util/getFullName';
import getParticipantOrLeaderStatus from '../util/getParticipantOrLeaderStatus';
import { getSkills } from '../util/getSkills';
import { getPastClients } from '../util/getPastClients';
import CurrentProjects from '../components/CurrentProjects';
import Layout from '../components/Layout';
import PersonalBio from '../components/PersonalBio';
import PersonalOverview from '../components/PersonalOverview';
import SkillsGrid from '../components/SkillsGrid';
import TradingCardImage from '../components/TradingCardImage';
import PastClients from '../components/PastClients';
import Show from '../components/Show';
import FunFacts from '../components/FunFacts';

export default function DetailPage({ fetchedTeamMember }) {
  const cohortStatus = getParticipantOrLeaderStatus(fetchedTeamMember);
  const fullName = getFullName(fetchedTeamMember);
  const skills = getSkills(fetchedTeamMember);
  const pastClients = getPastClients(fetchedTeamMember);

  return (
    <Layout>
      <Head>
        <title>{`${fullName} | Sparkbox Team Availability`}</title>
        <meta name="description" content={`View details about ${fullName}, including their projects, skills, and interests.`} />
      </Head>
      <PersonalOverview
        name={fullName}
        jobTitle={fetchedTeamMember.jobTitle}
        cohortStatus={cohortStatus}
      >
        <TradingCardImage
          imageUrl={fetchedTeamMember.photo}
          forecastedHours={fetchedTeamMember.forecastedHours}
          weeklyCapacity={fetchedTeamMember.weeklyCapacity}
        />
      </PersonalOverview>

      <CurrentProjects
        currentProjects={fetchedTeamMember.currentProjects}
      />

      <SkillsGrid skilldata={skills} />

      <div className="obj-responsive-two-cols">
        <PersonalBio
          name={fetchedTeamMember.firstName}
          bio={fetchedTeamMember.bio}
        />

        <FunFacts funFacts={fetchedTeamMember.funFacts} />
      </div>

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
