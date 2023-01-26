import doOnOpen from './appsScript/doOnOpen';
import doFunction from './appsScript/doFunction';
import init from './appsScript/init';

import dataArrayToObjects from './utils/dataArrayToObjects';
import LoggerSheetItem from './classes/types/loggerSheetItem';
import getSheetDataInObjects from './utils/getSheetDataInObjects';
import LoggerTM from './classes/LoggerTM';

(global as any).test = () => {
  // const objectsArr = dataArrayToObjects<LoggerSheetItem>(arrayTest);
  // console.log(objectsArr, objectsArr[0]);

  // const cleanerSheet =
  //   SpreadsheetApp.getActiveSpreadsheet().getSheetByName('cleaner');
  // console.log(getSheetDataInObjects(cleanerSheet));

  // const loggerTest = new LoggerTM();
  console.log('loggerTest.loggerDataInObjects');
};

const arrayTest = [
  ['col1', 'col2', 'col3'],
  ['val1', 2, 'val3'],
  ['sasda', 2, 'dsdf'],
];

(global as any).init = init;
(global as any).doOnOpen = doOnOpen;
(global as any).doFunction = doFunction;
