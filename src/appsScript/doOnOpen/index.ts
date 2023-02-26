import menuItems from './menuItems';

const doOnOpen = () => {
  const ui = SpreadsheetApp.getUi();
  const tolamenu = ui.createMenu('tolá');

  tolamenu.addItem(...menuItems.logger).addToUi();

  tolamenu.addItem(...menuItems.cleaner).addToUi();
};
export default doOnOpen;
