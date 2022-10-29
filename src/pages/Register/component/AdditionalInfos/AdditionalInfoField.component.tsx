import Typography from "@suid/material/Typography";
import { JSXElement } from "solid-js";

interface AdditionalInfoFieldProps {
  title: string;
  icon: any;
}

export const AdditionalInfoField = (props: AdditionalInfoFieldProps): JSXElement => {
  return (
    <div style={{ "max-width": "400px", "padding-top": "16px" }}>
      <div
        style={{
          display: "flex",
          "justify-content": "flex-start",
          gap: "16px",
          "align-items": "center",
        }}
      >
        {props.icon}
        <Typography variant={"h6"} component="h6">
          {props.title}
        </Typography>
      </div>
      <p style={{ "text-align": "justify", "text-justify": "inter-word" }}>
        Vous pouvez désormais oublier toutes les cartes en carton, où autres application de carte de fidelité, avec
        fidelity vous avez une carte unique pour tous vos commerces !
      </p>
    </div>
  );
};
