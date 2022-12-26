const initMenuActions = (globalThis: any) => {
  const menuActionsKeys = Object.keys(menuActions) as MenuActionsKeys[];

  menuActionsKeys.forEach((menuActionKey) => {
    globalThis[menuActionKey] = menuActions[menuActionKey];
  });
};
export default initMenuActions;

const menuActions = {
  cleaner: function () {
    return;
  },
  logger: function () {
    return;
  },
};

export type MenuActionsKeys = keyof typeof menuActions;
