import Button from "@suid/material/Button";
import Typography from "@suid/material/Typography";
import { Logger } from "../../shared/utils/logger";
import { createEffect, JSXElement } from "solid-js";

export const Error = (props: { message: string }): JSXElement => {
  createEffect(() => Logger.error(props.message));
  return (
    <div style={{ padding: "10%" }}>
      <Typography variant="h4">Oups ! Une erreur est survenue veuillez nous excusez pour la gène occasionée</Typography>
      <br />
      <Button variant="contained" href={"/"}>
        Retour à l'accueil
      </Button>
      <Typography component={"a"}>{props.message}</Typography>
    </div>
  );
};
