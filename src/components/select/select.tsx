import React, { HTMLAttributes, useRef } from 'react';
import TextInput from '../text-input';
import { ComponentSize } from '../../config/sizes';
import { 
    StyledWrapper,
    StyledHeader, 
    StyledArrow, 
    StyledPopover, 
    List, 
    ListItem 
} from './styled';
import { useSelectLogic } from './use-select-logic';

export type SelectOption = {
    label: string;
    value: string;
}

export type SelectChangeHandler = (option: SelectOption | undefined) => void;

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'width' | 'option' | 'onChange'> {
    className?: string;
    size?: ComponentSize;
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
        readonly: true,
    }

    const headerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const {
        onOptionClick,
        optionsListVisible,
        setOptionsListVisible
    } = useSelectLogic(onChange, { headerRef, popoverRef }, disabled);

    return (
        <StyledWrapper
            className={className}   
            width={width}
            innerSize={size}
        >
            <StyledHeader
                ref={headerRef}
                onClick={() => setOptionsListVisible(true)}
            >
                <TextInput
                    value={option ? option.value : ''}
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