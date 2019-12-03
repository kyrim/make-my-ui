import * as React from "react";
import styled from "styled-components";

import { Props } from "./props";
import { colorFromState } from "./utility";

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.div<Pick<Props, "state">>`
  opacity: ${props =>
    props.state === "disabled" || props.state === "loading" ? 0.75 : 1};

  cursor: ${props =>
    (props.state === "disabled" || props.state === "loading") && "not-allowed"};
`;

const LabelStyled = styled.label<Pick<Props, "state" | "validationState">>`
  color: ${props => colorFromState(props)};
  user-select: none;
`;

const CheckboxStyled = styled.input<Pick<Props, "state" | "validationState">>`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before {
    content: "";
    margin-top: 0.2rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    display: inline-block;
    vertical-align: text-top;
    width: 1rem;
    height: 1rem;

    box-shadow: 0 0 0 1px ${props => colorFromState(props)};
  }

  &:focus + label:before {
    box-shadow: 0 0 0 2px ${props => colorFromState(props)};
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  &:disabled + label:before {
    box-shadow: none;
  }

  &:checked + label:after {
    content: "";
    position: absolute;
    left: 0.5rem;
    top: 0.6rem;
    width: 0.125rem;
    height: 0.125rem;
    box-shadow: 2px 0 0 ${props => colorFromState(props)},
      4px 0 0 ${props => colorFromState(props)},
      4px -2px 0 ${props => colorFromState(props)},
      4px -4px 0 ${props => colorFromState(props)},
      4px -6px 0 ${props => colorFromState(props)},
      4px -8px 0 ${props => colorFromState(props)};
    background-color: ${props => colorFromState(props)};
    transform: rotate(45deg);
  }
`;

const Message = styled.div<Pick<Props, "validationState">>`
  color: ${props => colorFromState(props)};
  width: 100%;
  font-size: 0.75rem;
  padding: 0.5rem;
`;

const Checkbox = ({
  className,
  state = "normal",
  validationState = "none",
  message,
  color,
  label,
  checkboxProps,
  labelProps
}: Props) => (
  <CheckboxWrapper className={className}>
    <Field state={state}>
      <CheckboxStyled
        type="checkbox"
        value={label}
        id={label}
        validationState={validationState}
        color={color}
        state={state}
        {...checkboxProps}
      />
      {label && (
        <LabelStyled
          htmlFor={label}
          state={state}
          validationState={validationState}
          color={color}
          {...labelProps}
        >
          {label}
        </LabelStyled>
      )}
    </Field>
    {message && <Message validationState={validationState}>{message}</Message>}
  </CheckboxWrapper>
);

export { Checkbox };
export type CheckboxProps = Props;
