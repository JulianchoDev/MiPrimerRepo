import ALPHABET from '../constants/alphabet';
import ss from './SpreadsheetApp';
import getSheetName from './getSheetName';
import SheetRange from '../types/sheetRange';

const getSheetColumnLetter = (
  sheetId: number,
  columnAddress: string,
  sheetRow = 1
) => {
  const sheetName = getSheetName(sheetId);
  const sheet = ss.getSheetByName(sheetName);
  if (sheet === null) throw new Error("sheetId doesn't exist");

  const lastColumn = sheet.getLastColumn();
  const headerRange: SheetRange = [sheetRow, 1, 1, lastColumn];

  const headerRow = sheet.getRange(...headerRange).getValues()[0];

  const columnValue = ss.getRange(columnAddress).getValue();
  const columnValueIndex = headerRow.indexOf(columnValue);

  const columnLetter = ALPHABET[columnValueIndex];

  return columnLetter;
};

export default getSheetColumnLetter;
