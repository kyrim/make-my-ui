import * as React from "react";
import styled from "styled-components";

import noimage from "./noimage.png";

interface Props {
  src?: string;
  alt: string;
  className?: string;
}

const ImageResponsive = styled.img`
  max-width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  object-fit: cover;
`;

const Image = ({ src, alt, className }: Props) => (
  <ImageResponsive className={className} alt={alt} src={src || noimage} />
);

export { Image };
export type ImageProps = Props;
