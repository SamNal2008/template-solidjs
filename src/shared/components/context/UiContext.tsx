import { createContext, JSXElement, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import Snackbar, { SnackbarColor, SnackbarProps } from "../snackbar/Snackbar";

interface IUiContext {
  alert: (severity: SnackbarColor, message: string) => void;
  snackBarProps: SnackbarProps;
  setSnackBarProps: SetStoreFunction<SnackbarProps>;
}

const UiContext = createContext<IUiContext>({
  alert: () => console.log("called"),
  setSnackBarProps: () => null,
  snackBarProps: {} as unknown as SnackbarProps,
});

export const UiProvider = (props: any): JSXElement => {
  const [snackBarProps, setSnackBarProps] = createStore<SnackbarProps>({
    autoHideDuration: 5000,
    message: "",
    open: false,
    severity: SnackbarColor.INFO,
  });

  const alert = (severity: SnackbarColor, message: string): void => {
    setSnackBarProps({ ...snackBarProps, message, severity, open: true });
  };

  return (
    <UiContext.Provider value={{ alert, snackBarProps, setSnackBarProps }}>
      {props.children}
      <Snackbar />
    </UiContext.Provider>
  );
};

export const useUi = (): IUiContext => useContext<IUiContext>(UiContext);
