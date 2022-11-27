import Typography from "@suid/material/Typography";
import { JSXElement } from "solid-js";
import "../../App.module.css";
import "../Home/style/Home.css";
import style from "./style/NotFound.module.css";

export const NotFound = (): JSXElement => {
  document.title = "Page introuvable";

  return (
    <>
      <Typography variant={"h1"} component="span" class={style.test}>
        404
      </Typography>
      <Typography variant={"h3"}>Oups ... Il semblerait que cette page n'existe pas !</Typography>
    </>
  );
};
