import React from "react";
import styled from "styled-components";
import Color from "color";

import { TextAreaAutosize } from "./textarea-autosize";
import { Props } from "./props";
import { colorFromState } from "./utility";

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.div<Pick<Props, "state" | "validationState">>`
  display: flex;
  align-items: center;

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

  textarea:not(:placeholder-shown) + label {
    transform: translateY(-1rem);
    opacity: 1;
  }
`;

const LabelStyled = styled.label<Pick<Props, "validationState" | "state">>`
  color: ${(props) => colorFromState(props)};
  font-weight: ${(props) => props.theme.font.fontWeightBold};
  font-size: 0.5rem;
`;

const TextAreaStyled = styled(TextAreaAutosize)<
  Pick<Props, "color" | "state" | "validationState">
>`
  width: 100%;
  font-size: inherit;
  font-weight: inherit;
  font: inherit;

  padding: 0.75rem 0rem 0.5rem 0.5rem;
  border: none;
  border-bottom: solid 1px
    ${(props) =>
      Color(colorFromState(props)).mix(Color("white"), 0.7).toString()};

  background-color: ${(props) =>
     Color(colorFromState(props)).mix(Color("white"), 0.9).toString()};

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

const Message = styled.div<Pick<Props, "validationState" | "state">>`
  color: ${(props) => colorFromState(props)};
  width: 100%;
  font-size: 0.75rem;
  padding: 0.5rem;
`;

const TextAreaComponent = ({
  className,
  label,
  color,
  state,
  validationState,
  message,
  textAreaProps,
  labelProps,
}: Props) => {
  return (
    <TextAreaWrapper className={className}>
      <Field state={state} color={color} validationState={validationState}>
        <TextAreaStyled
          validationState={validationState}
          color={color}
          state={state}
          placeholder={label}
          {...textAreaProps}
        />

        {label && (
          <LabelStyled
            state={state}
            validationState={validationState}
            color={color}
            {...labelProps}
          >
            {label}
          </LabelStyled>
        )}
      </Field>
      {message && (
        <Message state={state} validationState={validationState}>
          {message}
        </Message>
      )}
    </TextAreaWrapper>
  );
};

TextAreaComponent.defaultProps = {
  state: "normal",
  validationState: "none",
};

const TextArea = TextAreaComponent;

export { TextArea };
export type TextAreaProps = Props;
