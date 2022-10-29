import "../../style/Register.css";
import { AdditionalInfoField } from "./AdditionalInfoField.component";
import AddLocationAltIcon from "@suid/icons-material/AddLocationAlt";
import CardMembershipIcon from "@suid/icons-material/CardMembership";
import PriceCheckIcon from "@suid/icons-material/PriceCheck";
import { JSXElement } from "solid-js";

export const AdditionalInfosComponent = (): JSXElement => {
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        "align-items": "flex-start",
      }}
    >
      <h2 class={"all-in-one"}>
        Pourquoi rejoindre <span style={{ "font-weight": "bold" }}>Fidelity</span> ?
      </h2>
      <AdditionalInfoField icon={<CardMembershipIcon color="secondary" />} title={"Une carte pour TOUT !"} />
      <AdditionalInfoField icon={<AddLocationAltIcon color="secondary" />} title={"Des partenaires partout"} />
      <AdditionalInfoField icon={<PriceCheckIcon color="secondary" />} title={"Et tout ça gratuitement"} />
    </div>
  );
};
