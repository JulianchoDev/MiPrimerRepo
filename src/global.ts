/* eslint-disable @typescript-eslint/no-explicit-any */
import doOnOpen from './appsScript/doOnOpen';
import doFunction from './appsScript/doFunction';
import init from './appsScript/init';

import LoggerTM from './classes/LoggerTM';

(global as any).test = () => {
  new LoggerTM().logAll();
};

(global as any).init = init;
(global as any).doOnOpen = doOnOpen;
(global as any).doFunction = doFunction;
