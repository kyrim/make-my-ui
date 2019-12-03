import styled from "styled-components";

import { ButtonBase } from "./button-base";
import { emphasisColor, darkerActiveColor } from "./utility";

export const ButtonBasic = styled(ButtonBase)`
  background-color: transparent;
  color: ${props => emphasisColor(props)};
  border: 2px solid ${props => emphasisColor(props)};

  :active {
    color: ${props => darkerActiveColor(emphasisColor(props))};
    border: 2px solid ${props => darkerActiveColor(emphasisColor(props))};
  }
`;
