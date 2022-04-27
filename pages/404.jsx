import Head from 'next/head';
import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div>
      <Head>
        <title>Page Not Found</title>
      </Head>

      <main>
        <h1>404</h1>

        <p>
          Hail, traveler. There is nothing to be found here.
        </p>
        <p>
          But since we should reward ardent exploration, here is a poem for you.
        </p>

        <figure>
          <h2>The Road Goes Ever On</h2>

          <blockquote>
            <p>The Road goes ever on and on</p>
            <p>Down from the door where it began.</p>
            <p>Now far ahead the Road has gone,</p>
            <p>And I must follow, if I can,</p>
            <p>Pursuing it with eager feet,</p>
            <p>Until it joins some larger way</p>
            <p>Where many paths and errands meet.</p>
            <p>And whither then? I cannot say.</p>
          </blockquote>

          <figcaption>
            From
            {' '}
            <cite>
              The Hobbit
            </cite>
            {' '}
            by J.R.R. Tolkien.
          </figcaption>
        </figure>

        <Link href="/">&lt; Return whence you came.</Link>
      </main>
    </div>
  );
}
