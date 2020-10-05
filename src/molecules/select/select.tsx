import React, { useRef } from 'react';
import TextInput from '../../atoms/text-input';
import { 
    StyledWrapper,
    StyledHeader, 
    StyledArrow, 
    StyledPopover, 
    List, 
    ListItem 
} from './styled';
import { useSelectLogic } from './use-select-logic';

export type SelectSize = 'default' | 'large' | 'small';

export type SelectOption = {
    label: string;
    value: string;
}

export type SelectChangeHandler = (option: SelectOption | undefined) => void;

export interface SelectProps {
    className?: string;
    size?: SelectSize;
    disabled?: boolean;
    error?: boolean;
    width?: string;
    option?: SelectOption;
    listOptions?: SelectOption[]; 
    onChange?: SelectChangeHandler;
    placeholder?: string;
}

const Select: React.ForwardRefRenderFunction<HTMLDivElement, SelectProps> = (props, ref) => {
    const { 
        size = 'default',
        className,
        disabled = false,
        error = false,
        option,
        listOptions,
        onChange,
        placeholder,
        width = '100%',
    } = props;

    const textInputStyles = {
        size,
        disabled,
        error,
        width: '100%',
        placeholder,
        nonInteractive: true,
    }

    const headerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const {
        onOptionClick,
        inputValue,
        setInputValue,
        optionsListVisible,
        setOptionsListVisible
    } = useSelectLogic(option, onChange, { headerRef, popoverRef }, disabled);

    return (
        <StyledWrapper
            className={className}   
            width={width}
            innerSize={size}
        >
            <StyledHeader
                ref={headerRef}
                width={width}
                innerSize={size}
                error={error}
                disabled={disabled}
                tabIndex={0}
                onClick={() => setOptionsListVisible(true)}
            >
                <TextInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                    {...textInputStyles}
                />
                <StyledArrow innerSize={size} upwards={optionsListVisible} />
            </StyledHeader>
            <StyledPopover
                ref={popoverRef}
                width={width}
                visible={optionsListVisible}
            >
                <List>
                    {listOptions?.map((option) => (
                        <ListItem
                            key={option.value}
                            innerSize={size}
                            onClick={() => onOptionClick(option)}
                        >{option.label}</ListItem>
                    ))}
                </List>
            </StyledPopover>
        </StyledWrapper>
    );
}

export default React.forwardRef<HTMLDivElement, SelectProps>(Select);