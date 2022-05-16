import Link from 'next/link';

export default function Logo() {
  return (
    <div className="cmp-logo">
      <Link href="/" passHref>
        <a href="replace" className="cmp-logo__link">
          <svg fill="currentColor" className="cmp-logo__icon" viewBox="0 0 139 38">
            <path className="cmp-logo__icon" d="M8.3 24.5v5H10l3-5H8.3zm17.1-10.9a2.5 2.5 0 100-5h-.6l-3 5h3.6zm-17-5v5.7l8.4-5.7H8.3zm17 16h-.8l-7.5 5h8.3c1.4 0 2.5-1.2 2.5-2.6 0-1.3-1-2.5-2.5-2.5zm8.1-6l-6.3 4.2a4.7 4.7 0 01-1.8 9H14L6.2 37H6a.3.3 0 01-.3-.2v-.2l2.9-4.8H6.5a.3.3 0 01-.3-.3v-8.8c0-.2.1-.3.3-.3h9.7c.2 0 .3.1.3.3v.1l-4.6 7.8 15.4-10.4H.5a.3.3 0 01-.2-.3s0-.2.2-.2l5.7-4v-9c0-.1.1-.2.3-.2H20l6-4 3-2.1h.2c.2 0 .3 0 .3.2v.1L26 6.5a4.6 4.6 0 01-.6 9.3h-6.8a.3.3 0 01-.3-.3v-.1l5.1-8.6L6.7 18h26.8s.2.1.2.3c0 .1 0 .2-.2.2z" />
            <g transform="translate(42,10)">
              <path className="cmp-logo__words" d="M9.3 4L7.4 5c-.3-.6-.7-2-2.3-1.9-.9 0-1.7.9-1.7 2 0 1.3.6 2.2 2.3 3.2C8 9.7 9 11.2 9 13.7c0 2.8-1.6 4.8-4.2 4.8-2.7 0-3.9-1.8-4.6-4l2-1c.5 1.2 1 2.5 2.3 2.5 1.1 0 2-.7 2-2s-.5-2.1-2.4-3.2C2.2 9.6.9 7.9.9 5.5.9 2.8 2.7.7 5 .7 8 .7 9 3.2 9.3 4zM12.8 1H16c3.1 0 5 2.1 5 5.6 0 3.6-1.9 5.7-5 5.7h-.7v5.8h-2.7V1zm2.6 8.9h.6c1.5 0 2.4-1.2 2.4-3.3 0-2-1-3.2-2.5-3.2h-.5V10zM29.8 14.3H26l-.8 3.8h-2.5L26.5 1h3L33 18.1h-2.6l-.7-3.8zm-3.3-2.4h2.8l-1.4-6.8-1.4 6.8zM36.3 1h3.2c3.2 0 5 2 5 5.3 0 2-.6 3.6-1.7 4.6l2.5 7.2h-2.8l-2-6.2H39v6.2h-2.6V.9zM39 9.4h.4c1.6 0 2.5-1.1 2.5-3.1s-1-3-2.5-3H39v6.1zM52.8 11.2l-1.2 2.1v4.8H49V1h2.6v8.3L55 1h3l-3.5 7.5 3.8 9.7h-3l-2.5-7zM61.6 1h4C68.1 1 70 2.6 70 5.3c0 1.7-.8 3.2-2 3.8 1.4.6 2.3 2.1 2.3 4 0 3-2 5-4.8 5h-3.8V.8zm2.6 7.3h1c1.3 0 2-1 2-2.6 0-1.5-.7-2.4-1.9-2.4h-1.1v5zm1.2 7.5c1.3 0 2.1-1 2.1-2.6s-.8-2.6-2.2-2.6h-1v5.2h1zM78.3 18.4c-3.3 0-5.2-3.1-5.2-8.9 0-5.7 1.9-8.8 5.2-8.8 3.3 0 5.1 3.1 5.1 8.8 0 5.8-1.8 9-5.1 9zm0-2.6c1.5 0 2.4-2.2 2.4-6.3 0-4-1-6.2-2.4-6.2-1.6 0-2.4 2.2-2.4 6.2s.8 6.3 2.4 6.3zM89 9.4L85.5 1h3l2 6.2 2-6.2h2.8l-3.3 8.7 3.4 8.5h-3L90.4 12 88.3 18h-2.7l3.3-8.7z" />
            </g>
          </svg>
          <span className="cmp-logo__hidden-text">Team Availability Overview Page</span>
        </a>
      </Link>
    </div>
  );
}