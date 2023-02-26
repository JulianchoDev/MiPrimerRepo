type CleanerSheetItem = {
  targetId: number;
  run: 0 | 1;
  targetName: string;
  targetLastRow: number;
  clean: number;
};

export default CleanerSheetItem;
