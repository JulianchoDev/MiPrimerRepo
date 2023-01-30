const pasteData = (targetSheet, dataArray, range) => {
  const sheet = targetSheet;
  const data = dataArray;
  const dataRange = range;

  /*sheet.getRange(
      1,
      1,
      dataRange.finalRow,
      dataRange.finalColumn
    ).setValues(data)*/

  sheet.this.getSheetRange();
};
