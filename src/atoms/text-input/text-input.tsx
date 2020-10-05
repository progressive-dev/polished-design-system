import React, { HTMLAttributes, ReactNode } from 'react';
import { StyledTextInput, StyledWrapper, StyledIcon } from './styled';

export type TextInputSize = 'default' | 'large' | 'small';

export interface TextInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled'> {
    icon?: React.ElementType;
    size?: TextInputSize;
    disabled?: boolean;
    error?: boolean;
    value?: string;
    width?: string;
    /* Useful when input is controlled by another element */
    nonInteractive?: boolean;
}

const TextInput: React.ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (props, ref) => {
    const { 
        icon,
        size = 'default',
        className,
        disabled = false,
        nonInteractive = false,
        error = false,
        value,
        onChange,
        placeholder,
        width = '100%',
    } = props;

    const styles = {
        innerSize: size,
        disabled: disabled || nonInteractive,
        error,
        width,
        withIcon: icon !== undefined,
        nonInteractive,
        /* Disabled background in case of nonInteractive */
        disabledBackground: disabled,
    };

    return (
        <StyledWrapper width={width} innerSize={size}>
            <StyledTextInput
                type='text'
                value={value}
                onChange={onChange}
                ref={ref}
                className={className}
                placeholder={placeholder}
                {...styles}
            />
            <StyledIcon as={icon} innerSize={size} />
        </StyledWrapper>
    );
}

export default React.forwardRef<HTMLInputElement, TextInputProps>(TextInput);