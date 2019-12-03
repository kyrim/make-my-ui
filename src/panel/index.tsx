import * as React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  onClick?: () => void;
  children?: (JSX.Element | undefined)[] | JSX.Element;
}

var PanelBackground = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 100%;
`;

const Panel = (props: Props) => (
  <PanelBackground onClick={props.onClick} className={props.className}>
    {props.children}
  </PanelBackground>
);

export { Panel };
export type PanelProps = Props;
