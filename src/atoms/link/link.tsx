import React, { ElementType, HTMLAttributes, ReactNode } from 'react';
import { StyledLink } from './styled';

export interface LinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'as' | 'disabled'> {
    disabled?: boolean;
    className?: string;
    children: ReactNode;
    as?: ElementType;
    href?: string;
}

const Link: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (props, ref) => {
    const {
        className,
        disabled = false,
        children,
        as = 'a',
        href,
    } = props;

    return (
        <StyledLink
            ref={ref}
            className={className}
            as={disabled ? 'p' : as}
            href={href}
            disabled={disabled}
        >{children}</StyledLink>
    );
}


export default React.forwardRef<HTMLAnchorElement, LinkProps>(Link);