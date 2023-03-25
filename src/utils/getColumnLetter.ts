import ALPHABET from '../constants/alphabet';

const getColumnLetter = (colNumber: number) => {
  const columnLetter = ALPHABET[colNumber - 1];

  return columnLetter;
};

export default getColumnLetter;
