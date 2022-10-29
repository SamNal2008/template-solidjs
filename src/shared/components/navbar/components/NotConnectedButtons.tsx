import Button from "@suid/material/Button";
import LoginIcon from "@suid/icons-material/Login";
import PersonIcon from "@suid/icons-material/Person";
import { JSXElement } from "solid-js";

export const NotConnectedButtons = (): JSXElement => {
  return (
    <>
      <Button
        style={{
          "border-radius": "8px",
          color: "white",
          "border-color": "white",
        }}
        variant={"outlined"}
        href={"/sign-in"}
        startIcon={<LoginIcon />}
      >
        Se connecter
      </Button>
      <Button
        style={{
          "border-radius": "8px",
          background: "-webkit-linear-gradient(left, rgba(63, 94, 251, 1), rgba(252, 70, 107, 1))",
          color: "white",
        }}
        href={"/register"}
        variant={"contained"}
        startIcon={<PersonIcon />}
      >
        S'inscrire
      </Button>
    </>
  );
};
