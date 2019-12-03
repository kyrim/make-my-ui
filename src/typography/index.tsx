import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${props => props.theme.font.typography.header1Size};
  font-weight: ${props => props.theme.font.fontWeightRegular};
`;

export const H2 = styled.h2`
  font-size: ${props => props.theme.font.typography.header2Size};
  font-weight: ${props => props.theme.font.fontWeightRegular};
`;

export const H3 = styled.h3`
  font-size: ${props => props.theme.font.typography.header3Size};
  font-weight: ${props => props.theme.font.fontWeightRegular};
`;
