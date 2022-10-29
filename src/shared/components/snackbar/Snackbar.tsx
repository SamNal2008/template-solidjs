import ClearIcon from "@suid/icons-material/Clear";
import Alert from "@suid/material/Alert";
import Box from "@suid/material/Box";
import Grow from "@suid/material/Grow";
import IconButton from "@suid/material/IconButton";
import { createEffect, JSXElement, Show } from "solid-js";
import { useUi } from "../context/UiContext";
import "./Snackbar.css";

export enum SnackbarColor {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

// export type SnackbarPosition = 'top' | 'bottom' | 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
// export type SnackbarAnimation = 'fade' | 'grow' | 'slide';

export interface SnackbarProps {
  // position: SnackbarPosition,
  // animation: SnackbarAnimation;
  severity: SnackbarColor;
  autoHideDuration: number;
  message: string;
  open: boolean;
}

export default function Snackbar(): JSXElement {
  const { setSnackBarProps, snackBarProps } = useUi();

  createEffect(() => {
    if (snackBarProps.open) {
      setTimeout(() => setSnackBarProps({ ...snackBarProps, open: false }), snackBarProps.autoHideDuration);
    }
  });

  return (
    <Show when={snackBarProps.open}>
      <Grow style={{ transform: "translateX(-50%)" }} in={snackBarProps.open}>
        <Box minWidth={"30%"} left={"50%"} position={"absolute"} bottom={"10%"}>
          <Alert sx={{ paddingRight: "10%" }} elevation={12} severity={snackBarProps.severity}>
            {snackBarProps.message}
          </Alert>
          <IconButton
            sx={{ position: "absolute", top: "10%", right: "2%" }}
            aria-label="clear"
            color={snackBarProps.severity}
            onClick={() => setSnackBarProps({ ...snackBarProps, open: false })}
          >
            <ClearIcon />
          </IconButton>
        </Box>
      </Grow>
    </Show>
  );
}
