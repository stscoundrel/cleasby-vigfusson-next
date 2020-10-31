const { getDictionary } = require('cleasby-vigfusson-dictionary');
const slugify = require('slugify');

const addSlugs = (words) => {
  const existingSlugs = {};

  const formattedWords = words.map((word) => {
    let slug = slugify(word.word).toLowerCase();

    if (existingSlugs[slug]) {
      // Double slug, make unique.
      existingSlugs[slug] += 1;
      slug = `${slug}-${existingSlugs[slug]}`;
    } else {
      existingSlugs[slug] = 1;
    }

    return {
      ...word,
      slug,
    };
  });

  return formattedWords;
};

export const getAllWords = () => {
  const words = getDictionary();

  /**
   * Add URL safe slugs.
   */
  const formattedWords = addSlugs(words);

  return formattedWords;
};

export default {
  getAllWords,
};
