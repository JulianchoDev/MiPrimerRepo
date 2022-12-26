import initMenuActions from './initMenuActions';
import menuItems from './menuItems';

const doOnOpen = (globalThis: any) => {
  initMenuActions(globalThis);

  const ui = SpreadsheetApp.getUi();
  const tolamenu = ui.createMenu('tolá');

  if (true) {
    tolamenu.addItem(...menuItems.logger).addToUi();
  }

  tolamenu.addItem(...menuItems.cleaner).addToUi();
};
export default doOnOpen;
