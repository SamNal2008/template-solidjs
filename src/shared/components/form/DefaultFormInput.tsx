import TextField, { TextFieldProps } from "@suid/material/TextField";
import { PropsOf } from "@suid/types";
import { JSX, JSXElement, splitProps } from "solid-js";
import { useField } from "solid-js-form";
import { FormInputParam } from "./FormInput";

export const DefaultFormInput = (
  props: PropsOf<TextFieldProps> & FormInputParam & JSX.InputHTMLAttributes<HTMLInputElement>
): JSXElement => {
  const [local, rest] = splitProps(props, ["name", "type", "label"]);
  const { form, field } = useField(local.name);

  return (
    <TextField
      name={local.name}
      label={props.label}
      type={local.type === "email" ? "text" : local.type}
      required={field.required()}
      value={field.value()}
      // @ts-expect-error
      onChange={(e: any) => form.setValue(local.name, e.target.value)}
      autoComplete="on"
      {...rest}
    />
  );
};
