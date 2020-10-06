import React, { ReactNode } from 'react';
import { StyledFormControl, StyledLabel, StyledError, StyledHint } from './styled';

export interface FormControlProps {
    label?: string;
    htmlFor?: string;
    error?: string;
    hint?: string;
    disabled?: boolean;
    className?: string;
    children: ReactNode;
}

const FormControl: React.ForwardRefRenderFunction<HTMLDivElement, FormControlProps> = (props, ref) => {
    const {
        label = '',
        htmlFor = '',
        error = '',
        hint = '',
        disabled = false,
        className,
        children
    } = props;

    return (
        <StyledFormControl>
            {label ? <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel> : null}
            {children}
            {error ? <StyledError>{error}</StyledError> : (
                hint ? <StyledHint>{hint}</StyledHint> : null
            )}
        </StyledFormControl>
    );
}

export default React.forwardRef<HTMLDivElement, FormControlProps>(FormControl);