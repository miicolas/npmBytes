import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text nous donnera les minutes lues sous la forme d'une chaîne de caractères compréhensible par tous,
    // par exemple "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}