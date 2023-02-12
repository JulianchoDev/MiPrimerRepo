/**
 * Clears sheet range leaving the formulas only
 */

const resetSheetFormulas = (
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
};

export default resetSheetFormulas;
