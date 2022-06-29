import Head from 'next/head';
import apiService from '../services/apiService';
import getFullName from '../util/getFullName';
import getParticipantOrLeaderStatus from '../util/getParticipantOrLeaderStatus';
import { getSkills } from '../util/getSkills';
import { getPastClients } from '../util/getPastClients';
import Projects from '../components/Projects';
import Layout from '../components/Layout';
import PersonalBio from '../components/PersonalBio';
import PersonalOverview from '../components/PersonalOverview';
import SkillsGrid from '../components/SkillsGrid';
import ProfilePhoto from '../components/ProfilePhoto';
import PastClients from '../components/PastClients';
import Show from '../components/Show';
import FunFacts from '../components/FunFacts';
import { useFilterContext } from '../context/FilterContext';
import getForecastedHoursIdx from '../util/getForecastedHoursIdx';

export default function DetailPage({ fetchedTeamMember }) {
  const cohortStatus = getParticipantOrLeaderStatus(fetchedTeamMember);
  const fullName = getFullName(fetchedTeamMember);
  const skills = getSkills(fetchedTeamMember);
  const pastClients = getPastClients(fetchedTeamMember);
  const { weekOffset } = useFilterContext();
  const idx = getForecastedHoursIdx(weekOffset);

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
        <ProfilePhoto
          imageUrl={fetchedTeamMember.photo}
          forecastedHours={fetchedTeamMember.forecastedHours[idx]}
          weeklyCapacity={fetchedTeamMember.weeklyCapacity}
        />
      </PersonalOverview>

      <Projects
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
