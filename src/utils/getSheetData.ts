import LoggerSheetItem from '../classes/types/loggerSheetItem';
import SheetRange from '../types/sheetRange';
import dataArrayToObjects from './dataArrayToObjects';
const getSheetData = <SheetItemType extends object>(sheetName: string) => {
  const sheetObject =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  const dataInObjects = getSheetDataInObjects<SheetItemType>(sheetObject);
  const sheetValues = getSheetValues(sheetObject);
  const dataSheetRange = getSheetRange(sheetObject);
  return {
    dataInObjects,
    sheetValues,
    dataSheetRange,
  };
};

export default getSheetData;

/**
 * @returns sheet data in array of objects with first row values as properties 
 * @example 
 * from
 * 
 * [ [ 'target_id', 'run', 'target_name', 'target_last_row', 'clean' ],
 *   [ 985805479, 1, 'orders', 11, 18 ] ]
 * 
 * to
 * 
 * [ { target_id: 985805479,
       run: 1,
      target_name: 'orders',
      target_last_row: 11,
      clean: 18 } ]
 */
export const getSheetDataInObjects = <SheetItemType extends object>(
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet | null
) => {
  if (sheetObject === null) return;

  const sheetValues = getSheetValues(sheetObject);
  if (sheetValues === undefined) return;

  const objectsArray = dataArrayToObjects<SheetItemType>(sheetValues);

  const finalArray = objectsArray.filter((item) => {
    if (!('include' in item)) return true;
    return item.include === 1;
  });

  return finalArray;
};

/**
 * @returns sheet data in array of arrays, excluding empty rows based on the first column rows count
 * @example
 * from
 * [
 *  ['target_id', 'run', 'target_name'],
 *  [ 1600250825, 0, 'test'],
 *  ['','','','']
 * ]
 *
 * to
 *
 * [
 *  ['target_id', 'run', 'target_name'],
 *  [ 1600250825, 0, 'test']
 * ]
 */
export const getSheetValues = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet | null
) => {
  if (sheetObject === null) throw new Error('error msg');

  const sheetRange = getSheetRange(sheetObject);
  if (sheetRange === undefined) return;

  const sheetValues = sheetObject.getRange(...sheetRange).getValues();

  return sheetValues;
};

/**
 * @returns an array with a sheet coordinates
 */
export const getSheetRange = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet | null,
  endColumn?: number,
  numberOfHeaders = 0
): SheetRange | undefined => {
  if (sheetObject === null) return;

  const sheetLastRow = sheetObject.getLastRow();
  const sheetLastColumn = sheetObject.getLastColumn();
  const sheetFirstColumnRange: [number, number, number, number] = [
    1,
    1,
    sheetLastRow,
    1,
  ];
  const sheetRangeRows = getRowsCount(sheetObject, sheetFirstColumnRange);

  const startRow = 1 + numberOfHeaders;
  const startColumn = 1;
  const finalRow = sheetRangeRows ? sheetRangeRows : sheetLastRow;
  const finalColumn = endColumn ? endColumn : sheetLastColumn;

  const finalRange = [
    startRow,
    startColumn,
    finalRow,
    finalColumn,
  ] as SheetRange;

  return finalRange;
};

/**
 * @returns count of non empty rows in a given range based on the first column
 */
export const getRowsCount = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet | null,
  range: [
    startRow: number,
    startColumn: number,
    finalRow: number,
    finalColumn: number
  ]
) => {
  if (sheetObject === null) return;

  const sheet = sheetObject;
  const sheetRows = sheet
    .getRange(range[0], range[1], range[2], range[3])
    .getValues();

  const nonEmptyRows = sheetRows.filter((row) => {
    if (row[0] !== '') return true;
  });

  return nonEmptyRows.length;
};
