import customFunctions, { CustomFunctions } from './customFunctions';

const doFunction = (
  functionName: CustomFunctions,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...functionArguments: any[]
) => {
  if (!(functionName in customFunctions))
    throw new Error("Custom function doesn't exist");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return customFunctions[functionName](...functionArguments);
};
export default doFunction;
