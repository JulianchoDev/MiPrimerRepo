import LoggerSheetItem from './types/loggerSheetItem';
import SheetData from './SheetData';
import ss from '../utils/SpreadsheetApp';
import logSheetData from '../utils/logSheetData';
import resetSheetFormulas from '../utils/resetSheetFormulas';
import getSheetName from '../utils/getSheetName';

class LoggerTM {
  loggerDataInObjects;
  constructor() {
    const loggerSheet = ss.getSheetByName('logger');
    if (!loggerSheet) return;

    const loggerSheetDataRange = new SheetData(loggerSheet).getRange();

    if (!loggerSheetDataRange) throw new Error('There are not logger items');

    this.loggerDataInObjects =
      loggerSheetDataRange.getDataInObjects<LoggerSheetItem>();
  }

  logAll() {
    let thereAreErrors = 0;

    this.loggerDataInObjects?.forEach((item) => {
      if (item.errors !== 0) thereAreErrors = thereAreErrors + 1;
    });

    if (thereAreErrors !== 0)
      throw new Error("There is 1 or more error in 'logger'");

    this.loggerDataInObjects?.forEach((item) => {
      this.makeSingleLog(item);
    });
  }

  makeSingleLog(loggerItem: LoggerSheetItem) {
    const originSheetName = getSheetName(loggerItem.originId);
    const originSheet = ss.getSheetByName(originSheetName);

    const targetSheetName = getSheetName(loggerItem.targetId);
    const targetSheet = ss.getSheetByName(targetSheetName);

    if (!originSheet || !targetSheet) return;

    const originSheetData = new SheetData(originSheet);

    const originRange = originSheetData.getRange(
      loggerItem.originStartRow,
      loggerItem.originStartColumn,
      loggerItem.originEndColumn
    );
    if (!originRange) return;

    const originValues = originRange.getValues();

    logSheetData(originValues, targetSheet, loggerItem.targetStartColumn);

    if (loggerItem.cleanAfter === 1) {
      const originRangeArray = originRange.getArray();
      resetSheetFormulas(originSheet, originRangeArray);
    }
  }
}

export default LoggerTM;
