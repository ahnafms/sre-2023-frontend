const formatName = (fullName: string) => {
  const words = fullName.trimEnd().trimStart().split(' ');
  if (words.length < 2) {
    return fullName;
  }

  let name: string = '';

  let charCount = 0;

  words.forEach(word => {
    if (charCount > 10) {
      name += `${word[0]} `;
      return;
    }

    charCount += word.length;

    name += `${toCapitalCase(word)} `;
  });

  return name.trimStart();
};

function toCapitalCase(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export { formatName };
