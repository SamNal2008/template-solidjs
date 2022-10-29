import Typography from "@suid/material/Typography";
import { useNavigate } from "solid-app-router";
import { JSXElement } from "solid-js";
import "../../App.module.css";
import "../Home/style/Home.css";
import style from "./style/NotFound.module.css";

export const NotFound = (): JSXElement => {
  document.title = "Page introuvable";
  const navigate = useNavigate();
  navigate("/");

  return (
    <>
      <Typography variant={"h1"} component="span" class={style.test}>
        404
      </Typography>
      <Typography variant={"h3"}>Oups ... Il semblerait que cette page n'existe pas !</Typography>
      <img
        style={{ "padding-top": "48px" }}
        src="https://media4.giphy.com/media/kF0ngyP7S1DfmzKqiN/giphy.gif?cid=ecf05e47k61yp3rzwjd40s8938k8u2cqufwepwqtkqjwdtru&rid=giphy.gif&ct=g"
        alt="this slowpoke moves"
        width="250"
      />
    </>
  );
};
