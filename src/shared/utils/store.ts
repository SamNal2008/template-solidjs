import { createEffect, createRoot } from "solid-js";
import { createStore } from "solid-js/store";
import { isArrayDefined, isDefined, isStringDefined } from "src/shared/utils/validators";

export interface IPersistentStore {
  [key: string]: any;
}

const [persistentStore, setPersistentStore] = createStore<IPersistentStore>();

let isStoreInitiated = false;

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export abstract class PersistentStoreUtils {
  public static init = (): void => {
    if (isStoreInitiated) return;
    isStoreInitiated = true;

    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index) ?? "";
      if (!isStringDefined(key)) continue;
      const value = localStorage.getItem(key) ?? "";
      if (!isStringDefined(value)) continue;
      try {
        setPersistentStore(key, JSON.parse(value));
      } catch (e) {
        setPersistentStore(key, value);
      }
    }
  };

  public static getItem = (key: string): any => {
    return persistentStore[key];
  };

  public static setItem = (key: string, value: any): void => {
    setPersistentStore(key, value);
    localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
  };

  public static removeItem = (key: string): void => {
    setPersistentStore(key, undefined);
    localStorage.removeItem(key);
  };

  public static clear = (): void => {
    setPersistentStore({});
    localStorage.clear();
  };
}

/**
 * Decorator to persist call (store them in persistent store)
 * @param key Key in the store
 * @param pathToValue Path to value in the call response
 * @returns
 */
export const Persist = (key: string, ...pathToValue: string[]) => {
  return function (_: any, __: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    if (typeof original === "function") {
      descriptor.value = function (...args: any[]) {
        const result = original.apply(this, args);
        const data = result[0];
        createRoot(() =>
          createEffect(() => {
            if (isDefined(data.loading)) return;
            if (isDefined(data.error)) return;
            let valueToStore = data();
            if (isArrayDefined(pathToValue)) {
              for (const path of pathToValue) {
                valueToStore = valueToStore[path];
              }
            }
            PersistentStoreUtils.setItem(key, valueToStore);
          })
        );
        return result;
      };
    }
    return descriptor;
  };
};

export default persistentStore;
