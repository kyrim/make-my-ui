import * as React from "react";
import { IconType } from "react-icons/lib/cjs";
import styled from "styled-components";

interface Props {
  className?: string;
  href?: string;
  onClick?: () => void;
  openInNewTab?: boolean;
  ariaLabel: string;
  icon?: IconType;
  text?: string;
  IconSizeInPx?: number;
  disabled?: boolean;
  children?: React.ReactNode;
}

const AStyled = styled.a<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: row;

  text-decoration: none;
  color: ${props =>
    props.disabled
      ? props.theme.colors.disabled
      : props.theme.colors.darkComplementary};

  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

const IconWrapper = styled.span`
  font-size: inherit;
  color: inherit;
  display: flex;
  margin-right: 0.25rem;
`;

const Link = ({
  href = "#",
  text,
  ariaLabel,
  icon: Icon,
  IconSizeInPx,
  onClick = () => {},
  disabled = false,
  openInNewTab = false,
  children,
  className
}: Props) => {
  return (
    <AStyled
      disabled={disabled}
      href={href}
      aria-label={ariaLabel}
      className={className}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      onClick={ev => {
        if (href === "#") {
          ev.preventDefault();
          onClick();
        }
      }}
    >
      <div></div>
      {Icon && (
        <IconWrapper>
          <Icon size={IconSizeInPx} />
        </IconWrapper>
      )}
      {text}
      {children}
    </AStyled>
  );
};

export { Link };
