import initMenuActions from './initMenuActions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const init = (globalObject: any) => {
  if (!globalObject)
    throw new Error('globalThis must be given to initMenuActions as argument');

  initMenuActions(globalObject);
};
export default init;
