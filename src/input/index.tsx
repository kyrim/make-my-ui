import React from "react";
import styled from "styled-components";
import Color from "color";

import { Props } from "./props";
import { colorFromState } from "./utility";

const InputWrapper = styled.div<
  Pick<Props, "color" | "state" | "validationState">
>`
  color: ${(props) => colorFromState(props)};
  display: flex;
  flex-direction: column;
`;

const Field = styled.div<Pick<Props, "state" | "validationState">>`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    Color(colorFromState(props)).mix(Color("white"), 0.9).toString()};

  border-bottom: solid 1px
    ${(props) =>
      Color(colorFromState(props)).mix(Color("white"), 0.7).toString()};

  position: relative;

  opacity: ${(props) =>
    props.state === "disabled" || props.state === "loading" ? 0.75 : 1};

  cursor: ${(props) =>
    (props.state === "disabled" || props.state === "loading") && "not-allowed"};

  label {
    position: absolute;
    top: 1rem;
    left: 0;
    opacity: 0;
    transition: all 0.1s ease;
  }

  input:not(:placeholder-shown) + label {
    transform: translateY(-1rem);
    opacity: 1;
  }

  input:not(:placeholder-shown) + svg {
    opacity: 1;
  }
`;

const LabelStyled = styled.label`
  color: inherit;
  font-weight: ${(props) => props.theme.font.fontWeightBold};
  font-size: 0.5rem;
`;

const InputStyled = styled.input<Pick<Props, "state" | "validationState">>`
  background-color: transparent;
  width: 100%;
  font-size: inherit;
  font-weight: inherit;
  font: inherit;
  padding: 0.75rem 0rem 0.5rem 0.5rem;
  border: none;

  box-sizing: border-box;

  pointer-events: ${(props) =>
    (props.state === "disabled" || props.state === "loading") && "none"};

  &::placeholder {
    color: ${(props) =>
      Color(colorFromState(props)).mix(Color("white"), 0.1).toString()};
  }

  &:focus {
    border-bottom: solid 1px ${(props) => colorFromState(props)};
    outline: 0;
    box-shadow: 0 2px 6px -8px ${(props) => colorFromState(props)};
  }

  &:focus::placeholder {
    color: ${(props) =>
      Color(colorFromState(props)).mix(Color("white"), 0.1).toString()};

    opacity: 0.5;
  }
`;

const InputIcon = styled.div`
  margin-left: 0.5rem;
  opacity: 0.5;
  color: inherit;
`;

const Message = styled.div`
  color: inherit;
  width: 100%;
  font-size: 0.75rem;
  padding: 0.5rem;
`;

// TODO: The padding left thing is a bit gross
const InputComponent = ({
  className,
  label,
  color,
  type,
  state,
  validationState,
  icon: Icon,
  message,
  inputProps,
  labelProps,
}: Props) => {
  return (
    <InputWrapper
      className={className}
      validationState={validationState}
      state={state}
      color={color}
    >
      <Field state={state} color={color} validationState={validationState}>
        {Icon && <InputIcon as={Icon} />}

        <InputStyled
          validationState={validationState}
          color={color}
          state={state}
          placeholder={label}
          type={type}
          {...inputProps}
        />

        {label && (
          <LabelStyled style={Icon && { marginLeft: "20px" }} {...labelProps}>
            {label}
          </LabelStyled>
        )}
      </Field>
      {message && (
        <Message style={Icon && { marginLeft: "20px" }}>{message}</Message>
      )}
    </InputWrapper>
  );
};

InputComponent.defaultProps = {
  type: "text",
  state: "normal",
  validationState: "none",
};

const Input = InputComponent;

export { Input };
export type InputProps = Props;
