import { setLocalStorage, clearLocalStorage, getLocalStorage, clearAllLocalStorage } from './utils';

const tools = {
    setLocalStorage: setLocalStorage,
    clearLocalStorage: clearLocalStorage,
    getLocalStorage: getLocalStorage,
    clearAllLocalStorage
} as const;

export type typeTools = typeof tools;

window.$tools = tools;
