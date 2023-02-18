import SheetRange from '../types/sheetRange';
import SheetData from '../classes/SheetData';
import { Console } from 'console';

/**
 * Copies given values to target sheet
 */
const logSheetData = (
  originValues: (string | number)[][],
  targetSheet: GoogleAppsScript.Spreadsheet.Sheet,
  targetStartColumn: number
) => {
  const targetSheetData = new SheetData(targetSheet);

  const targetDataRange: SheetRange = [
    targetSheetData.getLastRow(targetStartColumn) + 1,
    targetStartColumn,
    originValues.length,
    originValues[0].length,
  ];
  targetSheet.getRange(...targetDataRange).setValues(originValues);
};

export default logSheetData;
