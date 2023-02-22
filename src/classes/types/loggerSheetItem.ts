interface LoggerSheetItem {
  originId: number;
  targetId: number;
  include: 0 | 1;
  cleanAfter: 0 | 1;
  originName: string;
  originStartRow: number;
  originStartColumn: number;
  originNumColumns: number;
  targetName: string;
  targetStartColumn: number;
}
export default LoggerSheetItem;
