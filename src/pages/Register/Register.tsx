import "./style/Register.css";
import { RegistrationForm } from "./component/RegistrationForm/RegistrationForm";
import { AdditionalInfosComponent } from "./component/AdditionalInfos/AdditionalInfos.component";
import Typography from "@suid/material/Typography";
import { JSXElement } from "solid-js";

export const Register = (): JSXElement => {
  document.title = "Inscription";
  return (
    <>
      <Typography
        color={"primary"}
        variant="h2"
        component="div"
        style={{ "margin-top": "24px", "margin-bottom": "24px" }}
      >
        Bienvenue sur Fidelity !
      </Typography>
      <div class={"registration-page"}>
        <AdditionalInfosComponent />
        <RegistrationForm />
      </div>
    </>
  );
};
