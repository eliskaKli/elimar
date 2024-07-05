import React from "react";
import { StyledButton } from "./styled";

export type ButtonSize = 'xs' | 'md' | 'lg'

export interface ButtonProps {
    children?: React.ReactNode
    href: string
    size?: ButtonSize
    target?: string
    title?: string
    onClick?: (
        event: React.SyntheticEvent<
          HTMLAnchorElement | MouseEvent
        >
    ) => void
}

const Button: React.FC<ButtonProps> = ({
    children, 
    href,
    size = 'lg', 
    target='_blank',
    title='Vyplnit dotazník',
    onClick,
 }) => {

    if (!href) {
      return null
    }
    
    return (
        <StyledButton 
          href={href}
          onClick={onClick}
          size={size}
          target={target}
          title={title}
        >
            {children ?? title}
        </StyledButton>
    )
} 

export default Button