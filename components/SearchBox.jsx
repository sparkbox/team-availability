/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { useRouter } from 'next/router';
import getFullName from '../util/getFullName';
import Show from './Show';

export default function SearchBox({ teamMembers = [] }) {
  const [keyPressed, setKeyPressed] = useState(null);
  const router = useRouter();

  const findTeamMember = (searchValue) => (
    teamMembers.find((teamMember) => (
      getFullName(teamMember).toLowerCase() === searchValue.toLowerCase()
    ))
  );

  const navigateToDetailPage = (teamMember) => {
    if (!teamMember) router.push('/404');
    else router.push(`/${teamMember.id}`);
  };

  const handleFocus = (e) => {
    e.currentTarget.value = '';
  };

  const handleKeyDown = (e) => {
    const searchValue = e.currentTarget.value;

    if (e.key) setKeyPressed(true);
    if (!e.key) setKeyPressed(false);

    if (e.key === 'Enter') {
      const foundTeamMember = findTeamMember(searchValue);
      navigateToDetailPage(foundTeamMember);
    }
  };

  const handleInput = (e) => {
    const searchValue = e.currentTarget.value;

    if (!keyPressed && searchValue) {
      const foundTeamMember = findTeamMember(searchValue);
      navigateToDetailPage(foundTeamMember);
    }
  };

  const notOn404Page = !!(router.pathname !== '/404');

  return (
    <Show when={notOn404Page}>
      <label className="cmp-search-box">
        Search by name
        <input
          type="text"
          list="team-members"
          name="team-member-search"
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          className="cmp-search-box__input"
        />
        <datalist id="team-members">
          {teamMembers.map((teamMember) => (
            <option
              key={teamMember.id}
              value={getFullName(teamMember)}
            />
          ))}
        </datalist>
      </label>
    </Show>
  );
}
