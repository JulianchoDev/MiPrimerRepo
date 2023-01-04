import getSheetName from '../../utils/getSheetName';
import getSheetId from '../../utils/getSheetId';
import test from '../../utils/test';
/**
 * All functions specified in this object must validate the arguments given.
 * If arguments are not validated and errors are not handled,
 * there won't be feedback when using them on Google Sheets
 */
const customFunctions = {
  getSheetName: getSheetName,
  getSheetId: getSheetId,
  test: test,
};
export default customFunctions;

export type CustomFunctions = keyof typeof customFunctions;
