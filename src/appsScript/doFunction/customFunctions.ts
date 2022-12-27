import { getSheetName } from '../../utils';

/**
 * All functions specified in this object must validate the arguments given.
 * If arguments are not validated and errors are not handled,
 * there won't be feedback when using them on Google Sheets
 */
const customFunctions = {
  getSheetName: getSheetName,
  getSheetId: function (sheetName: string) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    const targetSheet = ss.getSheetByName(sheetName);

    if (targetSheet) return targetSheet.getSheetId();
  },
  test: function (a: string, b: string) {
    if (!a || !b) throw new Error('Arguments are needed');
    return 'Success!! ' + a + b;
  },
};
export default customFunctions;

export type CustomFunctions = keyof typeof customFunctions;
