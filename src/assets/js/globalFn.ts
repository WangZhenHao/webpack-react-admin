import { setLocalStorage, clearLocalStorage, getLocalStorage } from './utils';

const tools = {
    setLocalStorage: setLocalStorage,
    clearLocalStorage: clearLocalStorage,
    getLocalStorage: getLocalStorage,
} as const;

export type typeTools = typeof tools;

window.$tools = tools;
