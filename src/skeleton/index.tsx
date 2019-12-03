import * as React from "react";
import styled from "styled-components";

export interface Props {
  lines?: number;
}

const SkeletonContainer = styled.div<{ paddingRight: number }>`
  width: 100%;
  min-width: 1rem;
  padding: 0.5rem 0 0.5rem 0rem;
  padding-right: ${props => props.paddingRight}rem;
  height: 100%;
  min-height: 1rem;
`;

const DivStyled = styled.div`
  width: 100%;
  min-width: 1rem;
  height: 100%;
  min-height: 1rem;
  border-radius: ${props => props.theme.borderRadius};

  background-image: linear-gradient(
    90deg,
    #f4f4f4 0px,
    rgba(229, 229, 229, 0.8) 80px,
    #f4f4f4 80px
  );

  animation: shine 1.5s infinite ease-out;

  background-size: 2000px;

  @keyframes shine {
    0% {
      background-position: 0px;
    }

    40%,
    100% {
      background-position: 900px;
    }
  }
`;

const Skeleton = ({ lines = 1 }: Props) => {
  let skeletons = Array.from({ length: lines }, (v, i) => {
    const paddingRight = i == 0 ? 0 : Math.random() * 10;

    return (
      <SkeletonContainer paddingRight={paddingRight} key={i}>
        <DivStyled />
      </SkeletonContainer>
    );
  });

  return <>{skeletons}</>;
};

export { Skeleton };
