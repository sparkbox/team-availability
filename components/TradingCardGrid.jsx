import Link from 'next/link';
import getFullName from '../util/getFullName';

export default function TradingCardGrid({ teamMembers }) {
  return (
    <div className="cmp-trading-card-grid">
      {teamMembers.map((member) => (
        <article
          key={member.id}
          className="cmp-trading-card-grid__item"
        >
          <Link href={`/${member.id}`} passHref>
            <a href="replace">
              {getFullName(member)}
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
}
