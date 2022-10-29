import { useTheme } from "@suid/material";
import Button from "@suid/material/Button";
import { JSXElement, splitProps } from "solid-js";

export const MainButton = (props: any): JSXElement => {
  const theme = useTheme();

  const [local, rest] = splitProps(props, ["style", "isDisabled"]);

  return (
    <Button
      variant="contained"
      style={{
        "border-radius": `${theme.shape.borderRadius}px`,
        background: "-webkit-linear-gradient(left, rgba(63, 94, 251, 1), rgba(252, 70, 107, 1))",
        color: "white",
        "font-weight": "bold",
        width: "100%",
        ...local.style,
      }}
      disabled={local.isDisabled()}
      {...rest}
    >
      {props.children}
    </Button>
  );
};
