import { HTMLAttributes } from "react";

interface I_AText extends HTMLAttributes<HTMLParagraphElement> {}

export const A_Text = ({ children }: I_AText) => {
  return <p data-testid="a-text">{children}</p>;
};
