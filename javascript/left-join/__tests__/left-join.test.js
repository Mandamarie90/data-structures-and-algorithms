import { createMapFromObject, leftJoin } from '../index';


describe('leftJoin function tests', () => {


  test('should correctly perform a left join including "NULL" for missing entries', () => {
    const synonyms = createMapFromObject({ happy: 'joyful', sad: 'sorrowful' });
    const antonyms = createMapFromObject({ happy: 'sad', bad: 'good' });

    const result = leftJoin(synonyms, antonyms);
    expect(result.get('happy')).toEqual(['joyful', 'sad']);
    expect(result.get('sad')).toEqual(['sorrowful', 'NULL']);
  });

  test('should handle cases where both maps are empty', () => {
    const synonyms = createMapFromObject({});
    const antonyms = createMapFromObject({});

    const result = leftJoin(synonyms, antonyms);
    expect(result.size).toBe(0);
  });

  test('should ensure non-matching keys are not included from the second map', () => {
    const synonyms = createMapFromObject({ smart: 'intelligent' });
    const antonyms = createMapFromObject({ smart: 'dull', quick: 'slow' });

    const result = leftJoin(synonyms, antonyms);
    expect(result.get('smart')).toEqual(['intelligent', 'dull']);
    expect(result.has('quick')).toBeFalsy();
  });
});

