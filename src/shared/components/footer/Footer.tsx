import "./Footer.css";
import Button from "@suid/material/Button";
import { JSXElement } from "solid-js";

const Footer = (): JSXElement => {
  return (
    <footer class={"footer"}>
      <Button style={{ color: "white" }} href={"/"}>
        Accueil
      </Button>
    </footer>
  );
};

export default Footer;
