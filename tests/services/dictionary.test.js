import { getAllWords } from 'lib/services/dictionary';

describe('Dictionary tests', () => {
  test('Gets array of words', () => {
    const dictionary = getAllWords();

    expect(Array.isArray(dictionary)).toBeTruthy();
  });

  test('Dictionary has added url slugs to source', () => {
    const dictionary = getAllWords();

    dictionary.forEach((entry) => {
      expect(Object.keys(entry)).toEqual(['word', 'definitions', 'slug']);
    });
  });
});
