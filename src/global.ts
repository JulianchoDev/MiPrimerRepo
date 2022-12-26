import { uselessCalculation } from './index';
import init from './appsScript/init';
import doOnOpen from './appsScript/doOnOpen';

/**
 * Performs a useless calculation
 *
 * @param {number} x Base value of the calculation
 *
 * @customFunction
 */
// (global as any).init = init;
// (global as any).USELESS_CALCULATION = (x: number) => uselessCalculation(x);

/*
=========================================
MENU ITEMS
=========================================
*/
(global as any).doOnOpen = doOnOpen;

// (global as any).doOnOpen = () => {
//   const ui = SpreadsheetApp.getUi();
//   const tolamenu = ui.createMenu('tolá');

//   if (true) {
//     tolamenu
//       .addItem(
//         'Hacer logs', // option name
//         'logger' // function to run when click
//       )
//       .addToUi();
//   }

//   tolamenu.addItem('Hacer clean', 'cleaner').addToUi();
// };

// (global as any).menuActions = [
//   {
//     name: 'cleaner',
//     action: function () {
//       return;
//     },
//   },
//   {
//     name: 'logger',
//     action: function () {
//       return;
//     },
//   },
// ];

// (global as any).initMenuActions = (globalThis: any) => {
//   // @ts-ignore
//   (global as any).menuActions.forEach((menuAction) => {
//     // @ts-ignore
//     globalThis[menuAction.name] = menuAction.action;
//   });
// };

/*
=========================================
CUSTOM FUNTIONS
=========================================
*/
// (global as any).customFunctions = {
//   getSheetName: function (sheetID: number) {
//     const ss = SpreadsheetApp.getActiveSpreadsheet();

//     const target_sheet = ss
//       .getSheets()
//       .filter((s) => s.getSheetId() === sheetID)[0];

//     return target_sheet.getSheetName();
//   },
//   getSheetId: function (sheetName: string) {
//     const ss = SpreadsheetApp.getActiveSpreadsheet();

//     const targetSheet = ss.getSheetByName(sheetName);

//     if (targetSheet) return targetSheet.getSheetId();
//   },
//   test: function () {
//     return 'Success!!';
//   },
// };
// (global as any).functionsReducer = (
//   // @ts-ignore
//   funcName: keyof typeof customFunctions,
//   ...args: any[]
// ) => {
//   // @ts-ignore
//   return customFunctions[funcName](...args);
// };
