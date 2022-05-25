import {getMonday, getSunday} from './getDate';

describe('getMonday', () => { 
  it('returns monday formatted as short month day',  () => {
    const testDate = new Date(2022, 4, 23);
    const actual = getMonday(testDate);
    expect(actual).toBe('May 23');
  });

  it('if day is not a monday it returns the pervious monday',  () => {
    const testDate = new Date(2022, 4, 25);
    const actual = getMonday(testDate);
    expect(actual).toBe('May 23');
  });

  it('if day is a sunday it still returns pervious monday ',  () => {
    const testDate = new Date(2022, 4, 29);
    const actual = getMonday(testDate);
    expect(actual).toBe('May 23');
  });
});

describe('getSunday', () => { 
  it('returns sunday formatted as short month day, year',  () => {
    const testDate = new Date(2022, 4, 23);
    const actual = getSunday(testDate);
    expect(actual).toBe('May 29, 2022');
  });
  
  it('if day is not a sunday it returns the next sunday ',  () => {
    const testDate = new Date(2022, 4, 25);
    const actual = getSunday(testDate);
    expect(actual).toBe('May 29, 2022');
  });

  it('returns same day if that day is sunday',  () => {
    const testDate = new Date(2022, 4, 29);
    const actual = getSunday(testDate);
    expect(actual).toBe('May 29, 2022');
  });
});

