type CleanerSheetItem = {
  sheetId: number;
  include: 0 | 1;
  sheetName: string;
  startRow: number;
  startColumn: string;
  endColumn: string;
};

export default CleanerSheetItem;
