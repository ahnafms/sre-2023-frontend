const formatName = (fullName: string) => {
  const words = fullName.trimEnd().trimStart().split(' ');
  if (words.length < 2) {
    return fullName;
  }

  let name: string = '';

  words.forEach((word, index) => {
    if (index > 1) {
      name += `${word[0]} `;
      return;
    }
    name += `${word} `;
  });

  return name.trimStart();
};

export { formatName };
