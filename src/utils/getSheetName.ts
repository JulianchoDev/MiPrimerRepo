const getSheetName = (sheetID: number) => {
  if (typeof sheetID !== 'number') throw new Error('Sheet id must be a number');

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const targetSheet = ss
    .getSheets()
    .filter((s) => s.getSheetId() === sheetID)[0];

  if (!targetSheet) throw new Error('Sheet id does not exist');

  return targetSheet.getSheetName();
};
export default getSheetName;
