import { MenuActionsKeys } from '../init/initMenuActions';

type MenuItems = {
  [Property in MenuActionsKeys]: [title: string, functionName: MenuActionsKeys];
};

const menuItems: MenuItems = {
  logger: ['Hacer logs', 'logger'],
  cleaner: ['Hacer cleans', 'cleaner'],
};
export default menuItems;
