export const tf = (funcName: CustomFunctions, args: never) => {
  return customFunctions[funcName](args);
};

// const tf = () => {
//   return 'tf works!!!';
// };

export const customFunctions = {
  getSheetName: function (sheetID: number) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    const target_sheet = ss
      .getSheets()
      .filter((s) => s.getSheetId() === sheetID)[0];

    return target_sheet.getSheetName();
  },
  getSheetId: function (sheetName: string) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    const targetSheet = ss.getSheetByName(sheetName);

    if (targetSheet) return targetSheet.getSheetId();
  },
  test: function () {
    return 'Success!!';
  },
};
type CustomFunctions = keyof typeof customFunctions;

export const onOpen = (funcName: CustomFunctions, args: never) => {
  return customFunctions[funcName](args);
};

//export default onOpen;
