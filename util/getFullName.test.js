import getFullName from './getFullName';

describe('getFullName', () => {
  it('returns "firstName lastName" if both values are truthy', () => {
    const teamMember = { firstName: 'Tom', lastName: 'Bombadil' };
    const returnedName = getFullName(teamMember);

    expect(returnedName).toEqual('Tom Bombadil');
  });

  it('returns only "firstName" if there is no lastName', () => {
    const teamMember = { firstName: 'Gollum', lastName: '' };
    const returnedName = getFullName(teamMember);

    expect(returnedName).toEqual('Gollum');
  });

  it('returns only "lastName" if there is no firstName', () => {
    const teamMember = { firstName: '', lastName: 'Oakenshield' };
    const returnedName = getFullName(teamMember);

    expect(returnedName).toEqual('Oakenshield');
  });

  it('returns "Stranger" if neither firstName nor lastName are truthy', () => {
    const teamMember = { firstName: '', lastName: '' };
    const returnedName = getFullName(teamMember);

    expect(returnedName).toEqual('Stranger');
  });
});
