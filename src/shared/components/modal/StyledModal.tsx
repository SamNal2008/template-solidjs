import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import Fade from "@suid/material/Fade";
import Modal from "@suid/material/Modal";
import Typography from "@suid/material/Typography";
import { Accessor, JSXElement, Setter } from "solid-js";
import { isStringDefined } from "../../utils/validators";

export interface StyledModalProps {
  open: Accessor<boolean>;
  setOpen: Setter<boolean>;
  title: string;
  description?: string;
  children?: any;
  img?: string;
}

export const StyledModal = (props: StyledModalProps): JSXElement => {
  const theme = useTheme();

  return (
    <Modal open={props.open()} onClose={() => props.setOpen(false)}>
      <Fade in={props.open()}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: theme.palette.background.paper,
            border: "2px solid #000",
            borderColor: "grey",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: isStringDefined(props.description) ? "24px" : "16px",
          }}
        >
          {isStringDefined(props.img) ? (
            <img
              style={{
                position: "relative",
                top: "-7%",
                "z-index": 10,
              }}
              height={100}
              src={props.img}
            />
          ) : (
            <></>
          )}
          <Typography variant="h6" component="h2">
            {props.title}
          </Typography>
          <div style={{ "padding-top": "16px" }}>
            {isStringDefined(props.description) ? (
              <Typography id="modal-modal-description" variant="body1" component="p">
                {props.description}
              </Typography>
            ) : (
              <></>
            )}
          </div>
          {props.children}
        </Box>
      </Fade>
    </Modal>
  );
};
