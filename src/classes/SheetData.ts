import ALPHABET from '../constants/alphabet';
import SheetRange from '../types/sheetRange';
import dataArrayToObjects from '../utils/dataArrayToObjects';

class SheetData {
  private sheetObject;
  constructor(sheetObject: GoogleAppsScript.Spreadsheet.Sheet) {
    this.sheetObject = sheetObject;
  }

  /**
   * Returns array with data range coordinates, setting the last row based on the first column
   */
  public getRange = (startRow = 1, startColumn = 1, endColumn?: number) => {
    const sheetLastRow = this.getLastRow(startColumn);
    const sheetLastColumn = this.sheetObject.getLastColumn();

    const finalRow = sheetLastRow;
    const finalColumn = endColumn ? endColumn : sheetLastColumn;

    const finalRange = [
      startRow,
      startColumn,
      finalRow,
      finalColumn,
    ] as SheetRange;

    return {
      getArray: () => finalRange,
      getValues: () => this.getValues(finalRange),
      getDataInObjects: <SheetItemType extends object>() =>
        this.getDataInObjects<SheetItemType>(finalRange),
    };
  };

  /**
   * Returns sheet data in array of objects with first row values as properties 
   * @example 
   * from
   * 
   * [ [ 'target_id', 'run', 'target_name', 'target_last_row', 'clean' ],
   *   [ 985805479, 1, 'orders', 11, 18 ] ]
   * 
   * to
   * 
   * [ { target_id: 985805479,
         run: 1,
        target_name: 'orders',
        target_last_row: 11,
        clean: 18 } ]
   */
  private getDataInObjects = <SheetItemType extends object>(
    dataArrange: SheetRange
  ) => {
    const sheetValues = this.getValues(dataArrange);

    const objectsArray = dataArrayToObjects<SheetItemType>(sheetValues);

    const finalArray = objectsArray.filter((item) => {
      if (!('include' in item)) return true;
      return item.include === 1;
    });

    return finalArray;
  };

  /**
   * Return sheet data in array of arrays, excluding empty rows based on the first column rows count
   * @example
   * from
   * [
   *  ['target_id', 'run', 'target_name'],
   *  [ 1600250825, 0, 'test'],
   *  ['','','','']
   * ]
   *
   * to
   *
   * [
   *  ['target_id', 'run', 'target_name'],
   *  [ 1600250825, 0, 'test']
   * ]
   */
  private getValues = (dataArrange: SheetRange) => {
    const sheetValues = this.sheetObject.getRange(...dataArrange).getValues();

    return sheetValues;
  };

  /**
   * Returns last row of a given column.
   *
   * For this function to correctly work, there must not be empty rows between rows.
   *
   * Example of an empty row between rows:
   * @example
   * [
   *  [10],
   *  [1],
   *  [''],
   *  ['text']
   * ]
   */
  public getLastRow = (columnNumber = 1) => {
    const columnName = ALPHABET[columnNumber - 1];
    const rangeInString = `${columnName}1:${columnName}`;

    const sheetFirstColumn = this.sheetObject
      .getRange(rangeInString)
      .getValues();

    const sheetFirstColumnCount = sheetFirstColumn.filter(
      (row) => row[0] !== ''
    ).length;

    return sheetFirstColumnCount;
  };
}

export default SheetData;
