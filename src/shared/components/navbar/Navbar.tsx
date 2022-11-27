import Button from "@suid/material/Button";
import { environment } from "../../utils/environment";
import { IAuthContext, useAuth } from "../context/AuthenticationContext";
import { useStore } from "../context/StoreContext";
import { NotConnectedButtons } from "./components/NotConnectedButtons";
import MenuIcon from "@suid/icons-material/Menu";
import "./Navbar.css";
import IconButton from "@suid/material/IconButton";
import { useTheme } from "@suid/material";
import { JSXElement } from "solid-js";
import { isStringDefined } from "../../utils/validators";

export const Navbar = (): JSXElement => {
  const { authInfo }: Partial<IAuthContext> = useAuth();
  const { updateMenuState } = useStore();

  const openSideMenu = (): void => updateMenuState(true);

  const theme = useTheme();

  return (
    <nav class={"navbar-container"} style={{ "background-color": theme.palette.background.paper }}>
      <ul class={"navbar-list"}>
        <li class={"fidelity-logo"}>
          <a href={"/"}>
            <img alt={"Accueil"} src={`${environment.filePath}/Fidelity.svg`} width={"70"} height={"70"} />
          </a>
        </li>
        <li>
          <Button href={"/offers"}>Nos offres</Button>
        </li>
        <li>
          <Button href={"/companies"}>Nos partenaires</Button>
        </li>
        <li
          class={"activity-buttons"}
          style={isStringDefined(authInfo?.user?.id) ? { "justify-content": "flex-end" } : {}}
        >
          {isStringDefined(authInfo.user?.id) ? (
            <span>
              {authInfo?.user.userName}
              <IconButton style={{ margin: "0px 16px" }} onClick={openSideMenu}>
                <MenuIcon />
              </IconButton>
            </span>
          ) : (
            <NotConnectedButtons />
          )}
        </li>
      </ul>
    </nav>
  );
};
