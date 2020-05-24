import React, { useCallback } from "react";
import styled from "styled-components";
import Downshift from "downshift";
import Color from "color";

import { Input, InputProps } from "../input";

export interface AutocompleteItem {
  value: string;
  data: string;
}

interface Props extends InputProps {
  items: AutocompleteItem[];
  isLoading: boolean;
  onSelect: (item: AutocompleteItem) => void;
  onInputChange: (value: string) => void;
  initialSelectedItem?: AutocompleteItem;
  className?: string;
}

const Container = styled.div`
  position: relative;
`;

const InputStyled = styled(Input)``;

const Results = styled.ul`
  position: absolute;
  width: 100%;
  list-style-type: none;
  margin-top: 0.25rem;
  padding-inline-start: 0px;
  padding: 0;
  overflow: hidden;

  box-shadow: ${(props) => props.theme.boxShadow};

  border-radius: ${(props) => props.theme.borderRadius};

  color: ${(props) => props.color || props.theme.colors.complementary};
  background-color: ${(props) => props.theme.colors.white};

  z-index: ${(props) => props.theme.zIndex.dropdown};

  &:empty {
    border-bottom: 0px;
  }
`;

const Result = styled.li<{
  isHighlighted: boolean;
  isSelected: boolean;
  color: string;
}>`
  user-select: none;
  color: ${(props) => props.color || props.theme.colors.complementary};
  background-color: ${(props) =>
    props.isHighlighted
      ? Color(props.color || props.theme.colors.complementary)
          .mix(Color("white"), 0.9)
          .toString()
      : "white"};
  font-weight: ${(props) => props.theme.font.fontWeightRegular};
  padding-left: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;

const NoResult = styled.li<{
  color?: string;
}>`
  user-select: none;
  color: ${(props) => props.color || props.theme.colors.complementary};
  background-color: "white";
  padding-left: 1rem;

  border-bottom: 1px solid
    ${(props) => props.color || props.theme.colors.complementary};

  &:last-child {
    border-bottom: none;
  }
`;

const Loading = styled.li<{ color?: string }>`
  user-select: none;
  padding-left: 1rem;
  background: white;
  color: ${(props) =>
    Color(props.color || props.theme.colors.complementary)
      .mix(Color("white"), 0.3)
      .toString()};
  background-image: linear-gradient(
    to right,
    ${(props) =>
        Color(props.color || props.theme.colors.complementary)
          .mix(Color("white"), 0.98)
          .toString()}
      0%,
    ${(props) =>
        Color(props.color || props.theme.colors.complementary)
          .mix(Color("white"), 0.96)
          .toString()}
      20%,
    ${(props) =>
        Color(props.color || props.theme.colors.complementary)
          .mix(Color("white"), 0.95)
          .toString()}
      40%,
    ${(props) =>
        Color(props.color || props.theme.colors.complementary)
          .mix(Color("white"), 0.98)
          .toString()}
      100%
  );

  border-bottom: none;

  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  width: 100%;

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;

  @keyframes shimmer {
    0% {
      background-position: -1200px 0;
    }
    100% {
      background-position: 1200px 0;
    }
  }
`;

const itemToString = (item: AutocompleteItem | null) =>
  item ? item.value : "";

const Autocomplete = ({
  items,
  onSelect,
  onInputChange,
  isLoading,
  initialSelectedItem,
  className,
  inputProps,
  ...restOfProps
}: Props) => {
  debugger;
  const onChangeMemo = useCallback(
    (selection: AutocompleteItem | null) => selection && onSelect(selection),
    []
  );

  const onInputChangeMemo = useCallback(
    (inputValue: string) => onInputChange(inputValue),
    []
  );

  return (
    <Downshift
      onChange={onChangeMemo}
      onInputValueChange={onInputChangeMemo}
      itemToString={itemToString}
      initialSelectedItem={initialSelectedItem}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        selectedItem,
      }) => (
        <div className={className}>
          <Container>
            <InputStyled
              {...restOfProps}
              inputProps={getInputProps(inputProps)}
              labelProps={getLabelProps()}
            />
            <Results {...getMenuProps()} color={restOfProps.color}>
              {isLoading ? (
                <Loading color={restOfProps.color}>&nbsp;</Loading>
              ) : isOpen && items.length == 0 ? (
                <NoResult color={restOfProps.color}>No Results</NoResult>
              ) : (
                isOpen &&
                items.map((item, index) => (
                  <Result
                    isHighlighted={highlightedIndex == index}
                    isSelected={selectedItem == item}
                    key={item.value}
                    {...getItemProps({ item })}
                    color={restOfProps.color}
                  >
                    {item.value}
                  </Result>
                ))
              )}
            </Results>
          </Container>
        </div>
      )}
    </Downshift>
  );
};

Autocomplete.defaultProps = {
  type: "text",
  state: "normal",
  validationState: "none",
  isLoading: false,
  items: [],
  onSelect: () => {},
  onInputChange: () => {},
};

export { Autocomplete };
export type AutocompleteProps = Props;
