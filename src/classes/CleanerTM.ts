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

    const cleanerSheetDataRange = new SheetData(cleanerSheet).getRange();

    if (!cleanerSheetDataRange) throw new Error('There are not cleaner items');

    this.cleanerDataInObjects =
      cleanerSheetDataRange.getDataInObjects<CleanerSheetItem>();
  }

  cleanAll() {
    let thereAreErrors = 0;

    this.cleanerDataInObjects?.forEach((item) => {
      if (item.errors !== 0) thereAreErrors = thereAreErrors + 1;
    });

    if (thereAreErrors !== 0)
      throw new Error("There is 1 or more error in 'cleaner'");

    this.cleanerDataInObjects?.forEach((item) => {
      this.makeSingleClean(item);
    });
  }

  makeSingleClean(cleanerItem: CleanerSheetItem) {
    const sheetName = getSheetName(cleanerItem.sheetId);
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) return;

    const sheetData = new SheetData(sheet);

    const valuesRange = sheetData.getRange(
      cleanerItem.startRow,
      cleanerItem.startColumn,
      cleanerItem.endColumn
    );

    if (!valuesRange) return;

    const valuesRangeArray = valuesRange.getArray();
    resetSheetFormulas(sheet, valuesRangeArray);
  }
}

export default CleanerTM;
