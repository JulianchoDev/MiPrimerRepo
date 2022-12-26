import customFunctions, { CustomFunctions } from './customFunctions';

const doFunction = (
  functionName: CustomFunctions,
  ...functionArguments: any[]
) => {
  if (!(functionName in customFunctions))
    throw new Error("Custom function doesn't exist");
  // @ts-ignore
  return customFunctions[functionName](...functionArguments);
};
export default doFunction;
