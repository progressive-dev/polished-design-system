import React, { ReactNode, useState } from 'react';
import { StyledFormControl, StyledLabel, StyledError, StyledHint } from './styled';

export interface FormControlProps {
    label?: string;
    htmlFor?: string;
    error?: string;
    hint?: string;
    /* Disabled forces to always show label */
    disabled?: boolean;
    className?: string;
    children: ReactNode;
    onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
    /* Forces to always show label */
    forceLabel?: boolean;
}

const FormControl: React.ForwardRefRenderFunction<HTMLDivElement, FormControlProps> = (props, ref) => {
    const {
        label = '',
        htmlFor = '',
        error = '',
        hint = '',
        disabled = false,
        className,
        children,
        onBlur = () => {},
        onFocus = () => {},
        forceLabel = false,
    } = props;

    const [focused, setFocused] = useState(false);

    return (
        <StyledFormControl 
            ref={ref} 
            className={className}
            onFocus={(e) => { setFocused(true); onFocus(e); }}
            onBlur={(e) => { setFocused(false); onBlur(e); }}
        >
            {label ? <StyledLabel
                htmlFor={htmlFor}
                focused={forceLabel || disabled || focused || error !== ''}
                error={error !== ''}
            >{label}</StyledLabel> : null}
            {children}
            {error ? <StyledError>{error}</StyledError> : (
                hint ? <StyledHint>{hint}</StyledHint> : null
            )}
        </StyledFormControl>
    );
}

export default React.forwardRef<HTMLDivElement, FormControlProps>(FormControl);