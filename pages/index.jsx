import Head from 'next/head';
import Link from 'next/link';
import apiService from '../services/apiService';
import getFullName from '../util/getFullName';
import Layout from '../components/Layout';

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
            <Link href={`/${member.id}`} passHref>
              <a href="replace">
                {getFullName(member)}
              </a>
            </Link>
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
