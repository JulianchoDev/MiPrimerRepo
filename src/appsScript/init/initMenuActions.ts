/**
 * Sets menu actions to globalThis object in AppsScript
 * so that they are available when setting custom menu items
 * @param globalObject
 */
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
    return 123;
  },
  logger: function () {
    throw new Error('This is a test error');
  },
};

export type MenuActionsKeys = keyof typeof menuActions;
