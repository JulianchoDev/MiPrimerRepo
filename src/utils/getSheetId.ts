const getSheetId = (sheetName: string) => {
  if (typeof sheetName !== 'string')
    throw new Error('Sheet name must be a string');

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const targetSheet = ss.getSheetByName(sheetName);

  if (!targetSheet) throw new Error('Sheet name does not exist');

  return targetSheet.getSheetId();
};
export default getSheetId;
