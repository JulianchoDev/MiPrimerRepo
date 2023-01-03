export const getSheetName = (sheetID: number) => {
  if (typeof sheetID !== 'number') throw new Error('Sheet id must be a number');

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const targetSheet = ss
    .getSheets()
    .filter((s) => s.getSheetId() === sheetID)[0];

  if (!targetSheet) throw new Error('Sheet id does not exist');

  return targetSheet.getSheetName();
};

export const getSheetId = (sheetName: string) => {
  if (typeof sheetName !== 'string')
    throw new Error('Sheet name must be a string');

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const targetSheet = ss.getSheetByName(sheetName);

  if (!targetSheet) throw new Error('Sheet name does not exist');

  return targetSheet.getSheetId();
};
