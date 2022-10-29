import { createContext, JSXElement, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";

interface StoreItem {
  isMenuOpen: boolean;
}

interface IStoreContext {
  store: StoreItem;
  setStore: SetStoreFunction<StoreItem>;
  updateMenuState: (isOpen: boolean) => void;
}

const StoreContext = createContext<IStoreContext>();

export const StoreProvider = (props: { children: any }): JSXElement => {
  const [store, setStore] = createStore<StoreItem>({
    isMenuOpen: false,
  });

  const updateMenuState = (isOpen: boolean): void => {
    setStore("isMenuOpen", isOpen);
  };

  return <StoreContext.Provider value={{ store, setStore, updateMenuState }}>{props.children}</StoreContext.Provider>;
};

export const useStore = (): IStoreContext => {
  return useContext(StoreContext) ?? ({} as unknown as IStoreContext);
};
