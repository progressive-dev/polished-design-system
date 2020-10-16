import React, { ChangeEventHandler, HTMLAttributes } from 'react';
import { ComponentSize } from '../../config/sizes';
import { StyledTextInput, StyledWrapper, StyledIcon, StyledCross } from './styled';

export interface TextInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
    icon?: React.ElementType;
    size?: ComponentSize;
    disabled?: boolean;
    error?: boolean;
    value?: string;
    width?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /* Useful when input is controlled by another element */
    readonly?: boolean;
    clearable?: boolean;
    [key: string]: any;
}

const TextInput: React.ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (props, ref) => {
    const { 
        icon,
        size = 'default',
        className,
        disabled = false,
        error = false,
        value,
        onChange,
        placeholder,
        width = '100%',
        readonly = false,
        clearable = false,
        ...rest
    } = props;

    const styles = {
        innerSize: size,
        disabled: disabled,
        error,
        width,
        withIcon: icon !== undefined,
        withCross: clearable
    };

    return (
        <StyledWrapper width={width} innerSize={size}>
            <StyledTextInput
                type={rest.type || 'text'}
                value={value}
                onChange={onChange}
                readOnly={readonly}
                ref={ref}
                className={className}
                placeholder={placeholder}
                {...styles}
                {...rest}
            />
            <StyledIcon as={icon} innerSize={size} />
            {clearable && value ? (
                <StyledCross 
                    innerSize={size} 
                    onClick={() => 
                        onChange 
                        && onChange({ currentTarget: { value: '' } } as any)
                    }
                />
            ) : null}
        </StyledWrapper>
    );
}

export default React.forwardRef<HTMLInputElement, TextInputProps>(TextInput);