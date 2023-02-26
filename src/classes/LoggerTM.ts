import LoggerSheetItem from './types/loggerSheetItem';
import SheetData from './SheetData';
import ss from '../utils/SpreadsheetApp';
import logSheetData from '../utils/logSheetData';
import resetSheetFormulas from '../utils/resetSheetFormulas';

class LoggerTM {
  loggerDataInObjects;
  constructor() {
    const loggerSheet = ss.getSheetByName('logger');
    if (!loggerSheet) return;

    const loggerSheetData = new SheetData(loggerSheet);
    this.loggerDataInObjects = loggerSheetData
      .getRange()
      .getDataInObjects<LoggerSheetItem>();
  }

  logAll() {
    this.loggerDataInObjects?.forEach((item) => {
      this.makeSingleLog(item);
    });
  }

  makeSingleLog(loggerItem: LoggerSheetItem) {
    const originSheet = ss.getSheetByName(loggerItem.originName);
    const targetSheet = ss.getSheetByName(loggerItem.targetName);

    if (!originSheet || !targetSheet) return;

    const originSheetData = new SheetData(originSheet);

    const originRange = originSheetData.getRange(
      loggerItem.originStartRow,
      loggerItem.originStartColumn,
      loggerItem.originEndColumn
    );

    const originValues = originRange.getValues();

    logSheetData(originValues, targetSheet, loggerItem.targetStartColumn);

    if (loggerItem.cleanAfter === 1) {
      const originRangeArray = originRange.getArray();
      resetSheetFormulas(originSheet, originRangeArray);
    }
  }
}

export default LoggerTM;
