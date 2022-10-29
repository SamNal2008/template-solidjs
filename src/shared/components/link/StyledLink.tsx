import styled from "@suid/system/styled";

export const StyledLink = styled("a")(
  () => `
      height: 48px;
      width: 80px;
      color: white;
      background-color: #035e62;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `
);

// ${palette(ColorType.secondary)}
