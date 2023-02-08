/**
 * Clears sheet range leaving the formulas only
 */

const resetSheetFormulas = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet | null,
  dataRange: [
    starRow: number,
    starColumn: number,
    finalRow: number,
    finalColumn: number
  ]
) => {
  if (sheetObject === null) return;
  const sheetRange = sheetObject.getRange(...dataRange);

  sheetRange.getFormulas();
};

export default resetSheetFormulas;
