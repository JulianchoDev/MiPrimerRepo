import SheetRange from '../types/sheetRange';

/**
 * Clears sheet range leaving the formulas only
 */

/*const resetSheetFormulas = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet,
  dataRange: [
    starRow: number,
    starColumn: number,
    finalRow: number,
    finalColumn: number
  ]
) => {
  const sheetRange = sheetObject.getRange(...dataRange);

  sheetRange.getFormulas();
};*/

const resetSheetFormulas = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet,
  dataRange: SheetRange
) => {
  console.log(dataRange);
  const formulasRange = sheetObject.getRange(...dataRange);
  const currentFormulas = formulasRange.getFormulas();

  formulasRange.setFormulas(currentFormulas);
};

export default resetSheetFormulas;
