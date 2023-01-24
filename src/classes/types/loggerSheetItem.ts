interface LoggerSheetItem {
  originId: number;
  targetId: number;
  include: 0 | 1;
  originName: string;
  originFromColumn: number;
  originToColumn: number;
  originLastRow: number;
  targetName: string;
}
export default LoggerSheetItem;
