import { JSX, JSXElement, Match, Show, splitProps, Switch } from "solid-js";
import { useField } from "solid-js-form";
import { DefaultFormInput } from "./DefaultFormInput";
import { FileFormInput } from "./FileFormInput";
import InputError from "./InputError";
import { PasswordFormInput } from "./PasswordFormInput";

export interface FormInputParam {
  name: string;
  label: string;
}

export const FormInput = (props: JSX.InputHTMLAttributes<HTMLInputElement> & FormInputParam): JSXElement => {
  const { field } = useField(props.name);
  const [local, rest] = splitProps(props, ["type"]);

  return (
    <>
      <Switch fallback={<DefaultFormInput {...props} />}>
        <Match when={local.type === "password"}>
          <PasswordFormInput {...rest} />
        </Match>
        <Match when={local.type === "file"}>
          <FileFormInput {...rest} />
        </Match>
      </Switch>
      <Show when={field.error()}>
        <InputError message={field.error()} />
      </Show>
    </>
  );
};
