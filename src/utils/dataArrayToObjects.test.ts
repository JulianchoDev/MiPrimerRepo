import dataArrayToObjects from './dataArrayToObjects';

const dataInArrays1 = [
  ['col1', 'col2', 'col3'],
  ['val1', 'val2', 'val3'],
  [1, 2, 3],
];

const dataInArrays2 = [
  ['col1', 'col2', 'col3'],
  ['', '', ''],
  ['val1', 'val2', 'val3'],
  [1000, 2000, 3000],
];

describe('data in arrays to data in objects', () => {
  it('works for no empty array values', () => {
    expect(dataArrayToObjects(dataInArrays1)).toEqual([
      { col1: 'val1', col2: 'val2', col3: 'val3' },
      { col1: 1, col2: 2, col3: 3 },
    ]);
  });

  it('works for empty array values', () => {
    expect(dataArrayToObjects(dataInArrays2)).toEqual([
      { col1: '', col2: '', col3: '' },
      { col1: 'val1', col2: 'val2', col3: 'val3' },
      { col1: 1000, col2: 2000, col3: 3000 },
    ]);
  });
});
