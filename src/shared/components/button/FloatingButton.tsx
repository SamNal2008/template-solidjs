import Fab from "@suid/material/Fab";
import { children, JSX, JSXElement, splitProps } from "solid-js";

type FloatingButtonProps = {
  icon: any;
  text: string;
  color:
    | "fade"
    | "inherit"
    | "primary"
    | "secondary"
    | "default"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  component?: "label" | "a";
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const FloatingButton = (props: FloatingButtonProps): JSXElement => {
  const [local, rest] = splitProps(props, ["color", "component"]);

  const styleAndColor =
    local.color === "fade"
      ? {
          style: {
            background: "-webkit-linear-gradient(left, rgba(63, 94, 251, 1), rgba(252, 70, 107, 1))",
            color: "white",
          },
          color: undefined,
        }
      : {
          color: local.color,
        };

  const child = children(() => props.children);

  return (
    <Fab
      component={local.component ?? "button"}
      variant="extended"
      style={styleAndColor.style}
      color={styleAndColor.color}
      {...rest}
    >
      {props.icon}
      {props.text}
      {child()}
    </Fab>
  );
};
