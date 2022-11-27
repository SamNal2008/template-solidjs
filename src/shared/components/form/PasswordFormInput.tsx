import VisibilityIcon from "@suid/icons-material/Visibility";
import VisibilityOffIcon from "@suid/icons-material/VisibilityOff";
import IconButton from "@suid/material/IconButton";
import { TextFieldProps } from "@suid/material/TextField";
import { PropsOf } from "@suid/types";
import { createSignal, JSX, JSXElement, splitProps } from "solid-js";
import { DefaultFormInput } from "./DefaultFormInput";
import { FormInputParam } from "./FormInput";

export const PasswordFormInput = (
  props: PropsOf<TextFieldProps> & FormInputParam & JSX.InputHTMLAttributes<HTMLInputElement>
): JSXElement => {
  const [isPasswordShown, setIsPasswordShown] = createSignal(false);
  const [, rest] = splitProps(props, ["type"]);

  return (
    <DefaultFormInput
      // @ts-expect-error
      InputProps={{
        endAdornment: () => (
          <IconButton aria-label="show password" color="primary" onClick={() => setIsPasswordShown(!isPasswordShown())}>
            {isPasswordShown() ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        ),
      }}
      type={isPasswordShown() ? "text" : "password"}
      {...rest}
    />
  );
};
