import getFullName from './getFullName';

describe('getFullName', () => {
  it('returns "firstName lastName" if both values are truthy', () => {
    const teamMember = { firstName: 'Tom', lastName: 'Bombadil', suffix: '' };
    const returnedName = getFullName(teamMember);

    expect(returnedName).toEqual('Tom Bombadil');
  });

  it('returns "firstName lastName suffix" if all three values are truthy', () => {
    const teamMember = { firstName: 'Aragorn', lastName: 'Elessar', suffix: 'II' };
    const returnedName = getFullName(teamMember);

    expect(returnedName).toEqual('Aragorn Elessar II');
  });

  it('returns only "firstName" if there is no lastName and no suffix', () => {
    const teamMember = { firstName: 'Gollum', lastName: '', suffix: '' };
    const returnedName = getFullName(teamMember);

    expect(returnedName).toEqual('Gollum');
  });

  it('returns only "firstName suffix" if there is no lastName and a suffix is present', () => {
    const teamMember = { firstName: 'Argeleb', lastName: '', suffix: 'II' };
    const returnedName = getFullName(teamMember);

    expect(returnedName).toEqual('Argeleb II');
  });

  it('returns only "lastName" if there is no firstName', () => {
    const teamMember = { firstName: '', lastName: 'Oakenshield', suffix: '' };
    const returnedName = getFullName(teamMember);

    expect(returnedName).toEqual('Oakenshield');
  });

  it('returns "Stranger" if neither firstName nor lastName are truthy', () => {
    const teamMember = { firstName: '', lastName: '', suffix: '' };
    const returnedName = getFullName(teamMember);

    expect(returnedName).toEqual('Stranger');
  });
});
