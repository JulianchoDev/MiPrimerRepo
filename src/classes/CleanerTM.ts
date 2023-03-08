import CleanerSheetItem from './types/cleanerSheetItem';
import SheetData from './SheetData';
import ss from '../utils/SpreadsheetApp';
import resetSheetFormulas from '../utils/resetSheetFormulas';
import getSheetName from '../utils/getSheetName';

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
    const sheet = ss.getSheetByName(getSheetName(cleanerItem.sheetId));
    if (!sheet) return;

    const sheetData = new SheetData(sheet);

    const valuesRange = sheetData.getRange(
      cleanerItem.startRow,
      cleanerItem.startColumn,
      cleanerItem.endColumn
    );

    const valuesRangeArray = valuesRange.getArray();
    resetSheetFormulas(sheet, valuesRangeArray);
  }
}

export default CleanerTM;
