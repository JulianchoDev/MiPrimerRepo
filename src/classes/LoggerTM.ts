import LoggerSheetItem from './types/loggerSheetItem';
import getSheetData from '../utils/getSheetData';
import { ss } from '../utils/constants';
import resetSheetFormulas from '../utils/resetSheetFormulas';
import logSheetData from '../utils/logSheetData';

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

  //copy data form origin
  //paste data to target
  //reset data in origin

  makeSingleLog(sheetItem: LoggerSheetItem) {
    const originSheet = ss.getSheetByName(sheetItem.originName);
    const originValues = getSheetData(sheetItem.originName).sheetValues;
    console.log(originValues);
    const targetSheet = ss.getSheetByName(sheetItem.targetName);

    const dataRange = getSheetData(sheetItem.targetName).dataSheetRange;
    originValues?.shift();
    console.log('dataRange', dataRange);
    console.log('originValues', originValues);
    logSheetData(targetSheet!, originValues!, dataRange!);
    resetSheetFormulas(originSheet, dataRange!);
  }
}

export default LoggerTM;
