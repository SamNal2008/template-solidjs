import CircularProgress from "@suid/material/CircularProgress";
import { Accessor, JSX, JSXElement } from "solid-js";
import { MainButton } from "./MainButton";

export const LoadingButton = (
  props: JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading: Accessor<boolean>;
  }
): JSXElement => {
  return (
    <MainButton {...props} isDisabled={props.isLoading}>
      {props.isLoading() ? <CircularProgress /> : props.children}
    </MainButton>
  );
};
