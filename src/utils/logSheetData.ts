import SheetRange from '../types/sheetRange';

/**
 * Copys values from one sheet on another
 */
const logSheetData = (
  targetSheet: GoogleAppsScript.Spreadsheet.Sheet | null,
  dataArray: (string | number)[][],
  range: SheetRange
) => {
  const targetSheetLastRow = targetSheet?.getLastRow();

  //dataArray.slice para eliminar el primer item del array

  targetSheet
    ?.getRange(targetSheetLastRow! + 1, 1, range[2], range[3])
    .setValues(dataArray);
};

export default logSheetData;
