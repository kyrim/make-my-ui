import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  vertical?: boolean;
  children?: (JSX.Element | undefined)[] | JSX.Element;
  className?: string;
}

const borderLeft = css`
  > *:not(:first-child) {
    border-left: 1px solid ${props => props.theme.colors.secondary};
  }
`;

const borderBottom = css`
  > *:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
  }
`;

const Container = styled.div<{ vertical?: boolean }>`
  display: flex;
  flex-direction: ${props => (props.vertical ? "column" : "row")};
  justify-content: space-between;

  border: ${props => props.theme.borderRadius};
  border-radius: ${props => props.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.colors.secondary};

  ${props => (props.vertical ? borderBottom : borderLeft)}

  > * {
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
    padding: 0.25rem;
  }
`;

const ActionBar = ({ vertical, children, className }: Props) => {
  return (
    <Container className={className} vertical={vertical}>
      {children}
    </Container>
  );
};

export { ActionBar };
