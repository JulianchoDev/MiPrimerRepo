import CleanerSheetItem from './types/cleanerSheetItem';
import SheetData from './SheetData';
import ss from '../utils/SpreadsheetApp';
import resetSheetFormulas from '../utils/resetSheetFormulas';

class CleanerTM {
  cleanerDataInObjects;
  constructor() {
    const cleanerSheet = ss.getSheetByName('cleaner');
    if (!cleanerSheet) return;

    const cleanerSheetData = new SheetData(cleanerSheet);
    this.cleanerDataInObjects = cleanerSheetData
      .getRange()
      .getDataInObjects<CleanerSheetItem>();
  }

  cleanAll() {
    this.cleanerDataInObjects?.forEach((item) => {
      this.makeSingleClean(item);
    });
  }

  makeSingleClean(cleanerItem: CleanerSheetItem) {
    const sheet = ss.getSheetByName(cleanerItem.sheetName);
    if (!sheet) return;

    const contentSheet = new SheetData(sheet);

    const valuesRange = contentSheet.getRange(
      cleanerItem.startRow,
      cleanerItem.startColumn,
      cleanerItem.endColumn
    );

    const sheetValues = valuesRange.getValues();
    console.log(sheetValues);

    const valuesRangeArray = valuesRange.getArray();
    resetSheetFormulas(sheet, valuesRangeArray);
  }
}

export default CleanerTM;
