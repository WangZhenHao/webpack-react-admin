// declare namespace tools {
//   function setLocalStorage(key: string, value: any, expires?: number): void;
//   function clearLocalStorage(key?: string): void;
//   function getLocalStorage(key: string): any;
// }

// declare function test1<T>(arr: T, name1: keyof T, name2: keyof T): T;
import type { typeTools } from '@js/globalFn';
declare global {
    var $tools: typeTools;
    var TMap: any
}
