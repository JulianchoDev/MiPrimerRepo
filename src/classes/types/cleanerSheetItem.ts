type CleanerSheetItem = {
  sheetId: number;
  include: 0 | 1;
  startRow: number;
  startColumn: string;
  endColumn: string;
  errors: number;
};

export default CleanerSheetItem;
