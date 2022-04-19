import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>{`${id} | Sparkbox Team Availability`}</title>
        <meta name="description" content={`View details about ${id}, including their projects, skills, and interests.`} />
      </Head>
      <main>
        <h1>
          {`Hello ${id}!`}
        </h1>
      </main>
    </div>
  );
}
