import Typography from "@suid/material/Typography";
import { environment } from "src/shared/utils/environment";
import "./style/Home.css";
import { JSXElement } from "solid-js";

export const Home = (): JSXElement => {
  document.title = "Accueil";

  return (
    <>
      <Typography
        variant="h1"
        component="div"
        style={{ "padding-top": "128px", "padding-bottom": "24px" }}
        gutterBottom
      >
        Fidelity !
      </Typography>
      <h1 style={{ "padding-bottom": "24px" }}>
        Votre <span class={"all-in-one"}>all-in-one</span> carte de fidélité !
      </h1>
      <div class={"fade-in-fast text-with-picture left"}>
        <img src={`${environment.filePath }/people-using-phone.jpg`} alt={"People using their phone"} />
        <Typography variant="h3" component="p" gutterBottom>
          L'ensemble de vos commerces dans votre téléphone.
        </Typography>
        <p class={"home-text"} />
      </div>
      <div class={"fade-in-medium text-with-picture right"}>
        <img src={`${environment.filePath }/business-pizza.jpg`} />
        <Typography variant="h3" component="p" gutterBottom>
          Vous consommez et vous recevez des points !
        </Typography>
      </div>
      <div class={"fade-in-slow text-with-picture left"}>
        <img src={`${environment.filePath }/business-barber.jpg`} />
        <Typography variant="h3" component="p" gutterBottom>
          Profitez de vos promotions chez votre commerçant facilement
        </Typography>
      </div>
    </>
  );
};
