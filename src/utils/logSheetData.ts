import SheetRange from '../types/sheetRange';
import SheetData from '../classes/SheetData';
import ALPHABET from '../constants/alphabet';

/**
 * Copies given values to target sheet
 */
const logSheetData = (
  originValues: (string | number)[][],
  targetSheet: GoogleAppsScript.Spreadsheet.Sheet,
  targetStartColumn: string
) => {
  const targetSheetData = new SheetData(targetSheet);
  const firstColumnTargetSheet = ALPHABET.indexOf(targetStartColumn) + 1;

  const targetLastRow = targetSheetData.getLastRow(targetStartColumn);
  const targetLastRowValue = targetSheetData.sheetObject
    .getRange(targetLastRow, firstColumnTargetSheet)
    .getValue();

  const targetDataRange: SheetRange = [
    targetLastRowValue ? targetLastRow + 1 : targetLastRow,
    firstColumnTargetSheet,
    originValues.length,
    originValues[0].length,
  ];
  targetSheet.getRange(...targetDataRange).setValues(originValues);
  targetSheet.insertRowAfter(targetSheet.getLastRow());
};

export default logSheetData;
