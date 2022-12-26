import menuItems from './menuItems';

const doOnOpen = () => {
  const ui = SpreadsheetApp.getUi();
  const tolamenu = ui.createMenu('tolá');

  if (true) {
    tolamenu.addItem(...menuItems.logger).addToUi();
  }

  tolamenu.addItem(...menuItems.cleaner).addToUi();
};
export default doOnOpen;
