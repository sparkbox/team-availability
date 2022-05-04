import Head from 'next/head';
import Link from 'next/link';
import CardImage from '../components/tradingCardImage';
import apiService from '../services/apiService';
import getFullName from '../util/getFullName';
import SkipToContent from '../components/SkipToContent';

export default function Home({ teamMembers }) {
  return (
    <div>
      <Head>
        <title>Sparkbox Team Availability</title>
        <meta name="description" content="See which Sparkboxers are available for project work for a given week." />
      </Head>
      <SkipToContent />

      <main id="main-content">
        <h1>Week of April 18 to April 25, 2022</h1>
        <ul>
          {teamMembers && teamMembers.map((member) => (
            <li key={member.id}>
              
              <div className="imageUrl-overlay">
              <CardImage className="imageUrl" imageUrl={member.photo} />
              </div>
              <Link href={`/${member.id}`}>
                {getFullName(member)}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
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
