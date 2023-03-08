type LoggerSheetItem = {
  originId: number;
  targetId: number;
  include: 0 | 1;
  cleanAfter: 0 | 1;
  originStartRow: number;
  originStartColumn: string;
  originEndColumn: string;
  targetStartColumn: string;
};
export default LoggerSheetItem;
