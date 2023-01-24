import LoggerSheetItem from './types/loggerSheetItem';
import getSheetData from '../utils/getSheetData';
import { ss } from '../utils/constants';

class LoggerTM {
  loggerDataInObjects;
  constructor() {
    const loggerSheetData = getSheetData<LoggerSheetItem>('logger');
    if (typeof loggerSheetData.dataInObjects === 'undefined') return;
    this.loggerDataInObjects = loggerSheetData.dataInObjects;
  }

  logAll() {
    this.loggerDataInObjects?.forEach((item) => {
      this.makeSingleLog(item);
    });
  }

  makeSingleLog(sheetItem: LoggerSheetItem) {
    const originSheet = ss.getSheetByName(sheetItem.originName);
    const originVals = getSheetData(sheetItem.originName);
    const targetSheet = ss.getSheetByName(sheetItem.targetName);

    const dataRange = getSheetData(sheetItem.originName).dataSheetRange;
  }
}
