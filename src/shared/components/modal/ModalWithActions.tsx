import { children, JSXElement, splitProps } from "solid-js";
import { ModalActionsButton, ModalActionsButtonProps } from "./ModalActionsButton";
import { StyledModal, StyledModalProps } from "./StyledModal";

export type ModalActionProps = ModalActionsButtonProps & StyledModalProps;

export const ModalWithActions = (props: ModalActionProps): JSXElement => {
  const [local, rest] = splitProps(props, ["confirmationButtonType", "onCancelClick", "onConfirmationClick"]);
  const child = children(() => props.children);
  return (
    <StyledModal {...rest}>
      {() => child()}
      <ModalActionsButton {...local} />
    </StyledModal>
  );
};
