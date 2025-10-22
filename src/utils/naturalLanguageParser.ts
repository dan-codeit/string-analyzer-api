
export function parseNaturalLanguageQuery(input: string): Record<string, any> {
  const query = input.toLowerCase();
  const filters: Record<string, any> = {};

  // Palindrome
  if (query.includes("palindrome")) filters.is_palindrome = true;

  // Word count
  if (query.includes("single word") || query.includes("one word")) {
    filters.word_count = 1;
  } else {
    const wordCountMatch = query.match(/(\d+)\s+word/);
    if (wordCountMatch) filters.word_count = parseInt(wordCountMatch[1]);
  }

  // for Length filters
  const longerMatch = query.match(/longer than (\d+)/);
  if (longerMatch) filters.min_length = parseInt(longerMatch[1]) + 1;

  const shorterMatch = query.match(/shorter than (\d+)/);
  if (shorterMatch) filters.max_length = parseInt(shorterMatch[1]) - 1;

  const exactLengthMatch = query.match(/exactly (\d+) characters?/);
  if (exactLengthMatch) {
    const len = parseInt(exactLengthMatch[1]);
    filters.min_length = len;
    filters.max_length = len;
  }

  // for Character containment
  const containsChar = query.match(/containing the letter ([a-z])/);
  if (containsChar) {
    filters.contains_character = containsChar[1];
  }

  // for First vowel 
  if (query.includes("first vowel")) {
    filters.contains_character = "a";
  }

  // error for nothing parsed
  if (Object.keys(filters).length === 0) {
    throw new Error("Unable to parse");
  }

  return filters;
}
