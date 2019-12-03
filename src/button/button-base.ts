import styled from "styled-components";

import { StyledProps } from "./styled-props";

export const ButtonBase = styled.button<StyledProps>`
  font-size: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  width: ${props => props.fluid && "100%"};
  border-radius: ${props => props.theme.borderRadius};
  opacity: ${props =>
    props.state === "disabled" || props.state === "loading" ? 0.75 : 1};

  pointer-events: ${props =>
    (props.state === "disabled" || props.state === "loading") && "none"};
  cursor: pointer;
  font-weight: ${props => props.theme.font.fontWeightBold};
  border-width: 0;
  padding: 0.5rem 1rem;

  :focus {
    outline: none;
  }
`;
