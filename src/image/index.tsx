import * as React from "react";
import styled from "styled-components";

interface Props {
  src?: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

const ImageResponsive = styled.img`
  max-width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  object-fit: cover;
`;

const SvgStyled = styled.svg`
  max-width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  object-fit: cover;
`;

const NoImage = (
  <SvgStyled
    xmlns="http://www.w3.org/2000/svg"
    height="128"
    viewBox="0 0 512 512"
    width="128"
    fill="#bfbfbf"
  >
    <path d="M368 224c26.5 0 48-21.5 48-48 0-26.5-21.5-48-48-48 -26.5 0-48 21.5-48 48C320 202.5 341.5 224 368 224z" />
    <path d="M452 64H60c-15.6 0-28 12.7-28 28.3v327.4c0 15.6 12.4 28.3 28 28.3h392c15.6 0 28-12.7 28-28.3V92.3C480 76.7 467.6 64 452 64zM348.9 261.7c-3-3.5-7.6-6.2-12.8-6.2 -5.1 0-8.7 2.4-12.8 5.7l-18.7 15.8c-3.9 2.8-7 4.7-11.5 4.7 -4.3 0-8.2-1.6-11-4.1 -1-0.9-2.8-2.6-4.3-4.1L224 215.3c-4-4.6-10-7.5-16.7-7.5 -6.7 0-12.9 3.3-16.8 7.8L64 368.2V107.7c1-6.8 6.3-11.7 13.1-11.7h357.7c6.9 0 12.5 5.1 12.9 12l0.3 260.4L348.9 261.7z" />
  </SvgStyled>
);

const Image = ({ src, alt, height, width, className }: Props) =>
  src ? (
    <ImageResponsive
      className={className}
      height={height}
      width={width}
      alt={alt}
      src={src}
    />
  ) : (
    NoImage
  );

export { Image };
export type ImageProps = Props;
