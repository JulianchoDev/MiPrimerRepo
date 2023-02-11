import SheetRange from '../types/sheetRange';
import { getRowsCount } from './getSheetData';

/**
 * Copys values from one sheet on another
 */
const logSheetData = (
  targetSheet: GoogleAppsScript.Spreadsheet.Sheet | null,
  dataArray: (string | number)[][],
  range: SheetRange
) => {
  dataArray.shift();
  const targetSheetLastRow = getRowsCount(targetSheet, range);

  targetSheet
    ?.getRange(targetSheetLastRow! + 1, 1, range[2], range[3])
    .setValues(dataArray);
};

export default logSheetData;
