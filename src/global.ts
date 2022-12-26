import doOnOpen from './appsScript/doOnOpen';
import doFunction from './appsScript/doFunction';
import init from './appsScript/init';

(global as any).init = init;
(global as any).doOnOpen = doOnOpen;
(global as any).doFunction = doFunction;
