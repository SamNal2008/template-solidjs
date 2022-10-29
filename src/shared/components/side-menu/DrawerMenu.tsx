import AddBusiness from "@suid/icons-material/AddBusiness";
import CreditCardIcon from "@suid/icons-material/CreditCard";
import LogoutIcon from "@suid/icons-material/Logout";
import ManageAccountsIcon from "@suid/icons-material/ManageAccounts";
import Box from "@suid/material/Box";
import Divider from "@suid/material/Divider";
import Drawer from "@suid/material/Drawer";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemIcon from "@suid/material/ListItemIcon";
import ListItemText from "@suid/material/ListItemText";
import { JSXElement, mapArray } from "solid-js";
import { useAuth } from "../context/AuthenticationContext";
import { useStore } from "../context/StoreContext";

interface MenuActionsWithIcons {
  text: string;
  icon: any;
  href?: string;
}

export default function DrawerMenu(): JSXElement {
  const { store, updateMenuState } = useStore();
  const { promptLogoutConfirmation } = useAuth();

  const mainActions: MenuActionsWithIcons[] = [
    {
      text: "Profil",
      icon: <ManageAccountsIcon color="action" />,
      href: "/profile",
    },
    {
      text: "Espace fidelité",
      icon: <CreditCardIcon color="secondary" />,
      href: "/card",
    },
  ];

  const secondaryActions: MenuActionsWithIcons[] = [{ text: "Entreprises", icon: <AddBusiness />, href: "/companies" }];

  const thirdActions: MenuActionsWithIcons[] = [{ text: "Deconnexion", icon: <LogoutIcon style={{ color: "red" }} /> }];

  const actions: MenuActionsWithIcons[][] = [mainActions, secondaryActions, thirdActions];

  const toggleDrawer = (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
    if (event.type === "keydown") {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key === "Tab" || keyboardEvent.key === "Shift") return;
    }
    updateMenuState(open);
  };

  const list = (): JSXElement => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      {mapArray(
        () => [actions[0], actions[1]],
        (actionList) => (
          <>
            <List>
              {mapArray(
                () => actionList,
                (item) => (
                  <ListItem disablePadding component={"a"} style={{ color: "white" }} href={item.href}>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
          </>
        )
      )}
      <List>
        {mapArray(
          () => actions[2],
          (item) => (
            <ListItem disablePadding onClick={promptLogoutConfirmation}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"right"} open={store.isMenuOpen} sx={{ zIndex: 9999 }} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
}
