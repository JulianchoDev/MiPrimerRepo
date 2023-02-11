import SheetRange from '../types/sheetRange';
import { getRowsCount } from './getSheetData';

/**
 * Copys values from one sheet on another
 */
const logSheetData = (
  targetSheet: GoogleAppsScript.Spreadsheet.Sheet,
  originData: (string | number)[][],
  targetRange: SheetRange
) => {
  const targetSheetLastRow = getRowsCount(targetSheet, targetRange);

  targetSheet
    ?.getRange(targetSheetLastRow! + 1, 1, originData.length)
    .setValues(originData);
};

export default logSheetData;
