import React, { memo } from "react";

import styled from "styled-components";

import { Props } from "./props";
import { ButtonStandard } from "./button-standard";
import { ButtonBasic } from "./button-basic";
import { Spinner } from "../spinner";
import { StyledProps } from "./styled-props";

const ButtonWrapper = styled.div<StyledProps>`
  display: inline-block;
  display: flex;
  align-items: center;
  width: ${props => props.fluid && "100%"};
  cursor: ${props =>
    props.state === "disabled" || props.state === "loading"
      ? "not-allowed"
      : "pointer"};
`;

const ContentContainer = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  visibility: ${props => props.state == "loading" && "hidden"};
`;

// TODO: margin-top doesn't seem right
const StyledSpinner = styled(Spinner)<StyledProps>`
  position: absolute;
  margin-top: -0.2rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const IconWrapper = styled.div`
  margin-right: 0.2rem;
`;

const ButtonComponent = ({
  onClick,
  icon,
  className,
  ...restOfProps
}: Props) => {
  var Button = restOfProps.shape == "standard" ? ButtonStandard : ButtonBasic;

  const Icon = icon;
  return (
    <ButtonWrapper {...restOfProps} className={className}>
      <Button onClick={onClick} {...restOfProps}>
        {restOfProps.state === "loading" && <StyledSpinner {...restOfProps} />}
        <ContentContainer {...restOfProps}>
          {Icon && (
            <IconWrapper>
              <Icon style={{ fontSize: "1.1rem", verticalAlign: "bottom" }} />
            </IconWrapper>
          )}
          {restOfProps.text}
        </ContentContainer>
      </Button>
    </ButtonWrapper>
  );
};

ButtonComponent.defaultProps = {
  text: "",
  type: "button",
  onClick: () => {},
  emphasis: "primary",
  state: "none",
  shape: "standard",
  fluid: false
};

const Button = ButtonComponent;

export { Button };
export type ButtonProps = Props;
