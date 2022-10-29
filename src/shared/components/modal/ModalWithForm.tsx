import CircularProgress from "@suid/material/CircularProgress";
import Stack from "@suid/material/Stack";
import { createEffect, createSignal, For, JSXElement, Show, splitProps } from "solid-js";
import { Form, FormType } from "solid-js-form";
import { FormInput, FormInputParam } from "../form/FormInput";
import { ModalActionsButton } from "./ModalActionsButton";
import { ModalActionProps } from "./ModalWithActions";
import { StyledModal } from "./StyledModal";

type FormInputProps = FormInputParam & {
  type: string;
  initialValue: any;
  validation: any;
};

export type ModalWithFormProps = {
  formInfos: FormInputProps[];
} & ModalActionProps;

export const ModalWithForm = (props: ModalWithFormProps): JSXElement => {
  const [local, rest] = splitProps(props, [
    "formInfos",
    "onConfirmationClick",
    "onCancelClick",
    "confirmationButtonType",
  ]);

  const initialValues: { [p: string]: string } = {};
  const validation: { [p: string]: any } = {};

  const onSubmit = async (form: FormType.Context<any>): Promise<void> => {
    local.onConfirmationClick(form);
  };

  createEffect(() => {
    for (const elt of local.formInfos) {
      initialValues[elt.name] = elt.initialValue;
      validation[elt.name] = elt.validation;
    }
    setIsFormReady(true);
  });

  const [isFormReady, setIsFormReady] = createSignal(false);

  return (
    <StyledModal {...rest} description={"Veuillez remplir les informations"}>
      <Show when={isFormReady()} fallback={<CircularProgress />}>
        <div style={{ width: "100%" }}>
          <Form initialValues={initialValues} validation={validation} onSubmit={onSubmit}>
            <div
              style={{
                display: "flex",
                "flex-direction": "column",
                gap: "24px",
                "align-items": "center",
              }}
            >
              <Stack spacing={3} overflow={"scroll"} maxHeight={"250px"} sx={{ paddingTop: "24px" }}>
                <For each={local.formInfos}>
                  {(element) => (
                    <FormInput
                      type={element.type}
                      style={{ width: "300px" }}
                      label={element.label}
                      name={element.name}
                    />
                  )}
                </For>
              </Stack>
              <ModalActionsButton
                onCancelClick={local.onCancelClick}
                confirmationButtonType={"submit"}
                onConfirmationClick={onSubmit}
              />
            </div>
          </Form>
        </div>
      </Show>
    </StyledModal>
  );
};
