import LoggerTM from '../../classes/LoggerTM';
import CleanerTM from '../../classes/CleanerTM';

/**
 * Sets menu actions to globalThis object in AppsScript
 * so that they are available when setting custom menu items
 * @param globalObject
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initMenuActions = (globalObject: any) => {
  if (!globalObject)
    throw new Error('globalThis must be given to initMenuActions as argument');
  const menuActionsKeys = Object.keys(menuActions) as MenuActionsKeys[];

  menuActionsKeys.forEach((menuActionKey) => {
    globalObject[menuActionKey] = menuActions[menuActionKey];
  });
};
export default initMenuActions;

const menuActions = {
  cleaner: function () {
    new CleanerTM().cleanAll();
  },
  logger: function () {
    new LoggerTM().logAll();
  },
};

export type MenuActionsKeys = keyof typeof menuActions;
