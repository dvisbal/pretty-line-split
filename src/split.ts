function lastIndexOfPossibleCharacters(
  s: string,
  possibleCharacters: string[],
  start?: number
): number | null {
  start = start || s.length - 1;
  for (var i = start; i >= 0; i--) {
    if (possibleCharacters.includes(s[i])) {
      // SUCCESS: found character from possibleCharacters in s
      return i;
    }
  }

  // default:
  //    if no character from possibleCharacters found in s
  //    return null to indicate character not found
  return null;
}

export function split(s: string, length = 10) {
  if (s.length <= length) {
    // string is too small to split
    return { first: s, rest: "" };
  }

  // check if there's a good character to split on
  const indexOfGoodSplitCharacter = lastIndexOfPossibleCharacters(
    s,
    [" ", "-", "/", "\\"],
    length - 1
  );

  if (indexOfGoodSplitCharacter) {
    return {
      first: s.slice(0, indexOfGoodSplitCharacter + 1),
      rest: s.slice(indexOfGoodSplitCharacter + 1),
    };
  }

  // default:
  //    if no good character to split on
  //    return {length} characters as the first part of the split
  return { first: s.slice(0, length), rest: s.slice(length) };
}

export function splitLines(s: string, length = 10) {
  const lines = [];

  let first,
    rest = s;
  do {
    ({ first, rest } = split(rest));
    lines.push(first);
  } while (rest.length > 0);

  return lines;
}
