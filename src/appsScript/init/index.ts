import initMenuActions from './initMenuActions';

const init = (globalObject: any) => {
  if (!globalObject)
    throw new Error('globalThis must be given to initMenuActions as argument');

  initMenuActions(globalObject);
};
export default init;
