import dataArrayToObjects from './dataArrayToObjects';

const getSheetDataInObject = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet | null
) => {
  if (sheetObject === null) return;

  const sheetVals = getSheetValues(sheetObject);
  if (sheetVals === undefined) return;

  const objectsArray = dataArrayToObjects<{ run: 1 | 0 }>(sheetVals);
  const finalArray = objectsArray.filter((item) => item.run === 1);

  return finalArray;
};
export default getSheetDataInObject;

export const getSheetRange = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet | null,
  numberOfHeaders = 0,
  endColumn = null
) => {
  if (sheetObject === null) return;

  const sheetLastRow = sheetObject.getLastRow();
  const sheetLastColumn = sheetObject.getLastColumn();
  const sheetFirstColumnRange: [number, number, number, number] = [
    1,
    1,
    sheetLastRow,
    1,
  ];
  const sheetRangeRows = getRangeCount(sheetObject, sheetFirstColumnRange);

  const startRow = 1 + numberOfHeaders;
  const startColumn = 1;
  const finalRow = sheetRangeRows ? sheetRangeRows : sheetLastRow;
  const finalColumn = endColumn ? endColumn : sheetLastColumn;

  const finalRange = {
    startRow,
    startColumn,
    finalRow,
    finalColumn,
  };

  return finalRange;
};

/**
 *
 * @param sheetObject
 * @returns
 */
// returns non empty array values of the given sheet name // --
export const getSheetValues = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet | null
) => {
  if (sheetObject === null) throw new Error('error msg');

  const sheetRange = getSheetRange(sheetObject);
  if (sheetRange === undefined) return;

  const sheetValues = sheetObject
    .getRange(
      sheetRange.startRow,
      sheetRange.startColumn,
      sheetRange.finalRow,
      sheetRange.finalColumn
    )
    .getValues();

  return sheetValues;
};

export const getRangeCount = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet | null,
  range: [number, number, number, number]
) => {
  if (sheetObject === null) return;

  const sheet = sheetObject;
  const raw_vals = sheet
    .getRange(range[0], range[1], range[2], range[3])
    .getValues();

  const finalVals = raw_vals.filter((item) => {
    if (item[0] !== '') return true;
  });

  return finalVals.length;
};
