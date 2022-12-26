const init = (globalThis: object) => {
  const customGlobalProperties = {
    lov: 12,
  };

  for (const prop in customGlobalProperties) {
    if (prop in customGlobalProperties) {
      //@ts-ignore
      globalThis[prop] = customGlobalProperties[prop];
    }
  }
  // const customFunctions = [{ name: 'tf', value: tf }];

  // customFunctions.forEach((item) => {
  //   //@ts-ignore
  //   globalThis[item.name] = item.value;
  // });

  //@ts-ignore
  // globalThis.tf = () => {
  //   return 'tf works';
  // };
  //@ts-ignore
  //globalThis.tf = tf;

  //globalThis = { ...globalThis, ...customGlobalProperties };

  //onOpen();

  return globalThis;
};

export default init;
