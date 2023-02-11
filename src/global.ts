import doOnOpen from './appsScript/doOnOpen';
import doFunction from './appsScript/doFunction';
import init from './appsScript/init';

import getSheetData, {
  getSheetDataInObjects,
  getRowsCount,
} from './utils/getSheetData';
import LoggerSheetItem from './classes/types/loggerSheetItem';
import LoggerTM from './classes/LoggerTM';
import resetSheetFormulas from './utils/resetSheetFormulas';

(global as any).test = () => {
  // const objectsArr = dataArrayToObjects<LoggerSheetItem>(arrayTest);
  // console.log(objectsArr, objectsArr[0]);
  // const cleanerSheet =
  //   SpreadsheetApp.getActiveSpreadsheet().getSheetByName('cleaner');
  // console.log(getSheetDataInObjects(cleanerSheet));
  // const test = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('test');

  const loggerTest = new LoggerTM();
  const loggerSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('logger');
  const loggerSheetTest = getSheetDataInObjects<LoggerSheetItem>(loggerSheet);
  console.log(loggerTest.makeSingleLog(loggerSheetTest![0]));

  /*const sheetTest =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('current');
  const finalCell = sheetTest?.getLastRow();
  if (finalCell === undefined) return;
  const sheetFirstColumnRange: [number, number, number, number] = [1, 1, 12, 1];

  console.log(getRowsCount(sheetTest, sheetFirstColumnRange));*/
};

const loggerSheet1 = {
  originId: 0,
  targetId: 621361723,
  include: 1,
  originName: 'current',
  originFromColumn: 1,
  originToColumn: 9,
  originLastRow: 20,
  targetName: 'history',
};

const arrayTest = [
  ['col1', 'col2', 'col3'],
  ['val1', 2, 'val3'],
  ['sasda', 2, 'dsdf'],
];

(global as any).init = init;
(global as any).doOnOpen = doOnOpen;
(global as any).doFunction = doFunction;
