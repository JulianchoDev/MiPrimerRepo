type LoggerSheetItem = {
  originId: number;
  targetId: number;
  include: 0 | 1;
  cleanAfter: 0 | 1;
  originName: string;
  originStartRow: number;
  originStartColumn: string;
  originEndColumn: string;
  targetName: string;
  targetStartColumn: string;
};
export default LoggerSheetItem;
