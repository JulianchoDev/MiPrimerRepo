type CleanerSheetItem = {
  sheetId: number;
  include: 0 | 1;
  startRow: number;
  startColumn: string;
  endColumn: string;
};

export default CleanerSheetItem;
