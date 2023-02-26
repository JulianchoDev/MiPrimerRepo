import SheetRange from '../types/sheetRange';

/**
 * Clears sheet range leaving the formulas only
 */
const resetSheetFormulas = (
  sheetObject: GoogleAppsScript.Spreadsheet.Sheet,
  dataRange: SheetRange
) => {
  const formulasRange = sheetObject.getRange(...dataRange);
  const currentFormulas = formulasRange.getFormulas();

  formulasRange.setFormulas(currentFormulas);
};

export default resetSheetFormulas;
