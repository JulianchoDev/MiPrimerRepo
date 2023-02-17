/**
 * Returns array of objects
 *
 * @example
 * from
 *  [
 * ['col1', 'col2', 'col3'],
 * ['val1', 'val2', 'val3']
 * [1, 2, 3]
 * ]
 *
 * to
 *
 * [
 *  {
 *    col1:'val1',
 *    col2:'val2',
 *    col3:'val3'
 *  },
 * {col1:1, col2:2, col3:3}
 * ]
 */
const dataArrayToObjects = <ObjectStructure extends object>(
  dataArray: (string | number)[][]
): ObjectStructure[] => {
  const sheetFirstRow = dataArray[0];
  const sheetRows = dataArray.slice(1);

  const objectsArray = sheetRows.map(function (row) {
    return sheetFirstRow.reduce<any>((accumulator, current, index) => {
      accumulator[current] = row[index];
      return accumulator;
    }, {});
  });

  return objectsArray;
};

export default dataArrayToObjects;
