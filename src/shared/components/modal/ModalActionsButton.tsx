import Button from "@suid/material/Button";
import { JSXElement } from "solid-js";

export interface ModalActionsButtonProps {
  onConfirmationClick: any;
  onCancelClick: any;
  confirmationButtonType?: "submit" | "button" | "reset";
}

export const ModalActionsButton = (props: ModalActionsButtonProps): JSXElement => {
  return (
    <div
      style={{
        "padding-top": "8px",
        display: "flex",
        gap: "12px",
        "align-self": "flex-end",
      }}
    >
      <Button variant="outlined" color="error" onClick={props.onCancelClick}>
        Annuler
      </Button>
      <Button type={props.confirmationButtonType ?? "button"} onClick={props.onConfirmationClick}>
        Confirmer
      </Button>
    </div>
  );
};
