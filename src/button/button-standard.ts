import styled from "styled-components";

import { ButtonBase } from "./button-base";
import {
  hoverColor,
  emphasisColor,
  activeColor,
  buttonBottomColor
} from "./utility";

export const ButtonStandard = styled(ButtonBase)`
  color: ${props => props.theme.colors.white};
  background-color: ${props => emphasisColor(props)};
  border-bottom: 2px solid ${props => buttonBottomColor(emphasisColor(props))};

  :hover {
    background-color: ${props => hoverColor(emphasisColor(props))};
  }

  :active {
    background-color: ${props => activeColor(emphasisColor(props))};
    border-bottom: 2px solid ${props => emphasisColor(props)};
  }
`;
