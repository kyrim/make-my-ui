import { StyledProps } from "./styled-props";
import { IconType } from "react-icons/lib/cjs";

export interface Props extends StyledProps {
  text: string;
  type: "button" | "submit";
  // TODO: Make this typesafe
  icon?: IconType;
  onClick: () => void;
}
