import doOnOpen from './appsScript/doOnOpen';
import doFunction from './appsScript/doFunction';
import init from './appsScript/init';

import SheetData from './classes/SheetData';
import LoggerSheetItem from './classes/types/loggerSheetItem';
import LoggerTM from './classes/LoggerTM';

(global as any).test = () => {
  const loggerTest = new LoggerTM();

  const loggerSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('logger');

  const loggerSheetItems = new SheetData(loggerSheet!)
    .getRange()
    .getDataInObjects<LoggerSheetItem>();

  loggerTest.makeSingleLog(loggerSheetItems![0]);
};

(global as any).init = init;
(global as any).doOnOpen = doOnOpen;
(global as any).doFunction = doFunction;
