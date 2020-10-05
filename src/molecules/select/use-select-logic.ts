import React, { useEffect, useState } from 'react';
import { SelectOption, SelectChangeHandler } from './select';

interface Refs {
    headerRef: React.MutableRefObject<HTMLElement | null>;
    popoverRef: React.MutableRefObject<HTMLElement | null>;
}

export const useSelectLogic = (
    initialOption: SelectOption | undefined, 
    onChange: SelectChangeHandler = () => {},
    { headerRef, popoverRef }: Refs,
    disabled: boolean
) => {
    const [inputValue, setInputValue] = useState(initialOption ? initialOption.value : '');
    const [optionsListVisible, __setOptionsListVisible] = useState(false);
    const onOptionClick = (option: SelectOption) => {
        setInputValue(option.value);
        onChange(option);
        setOptionsListVisible(false);
    }

    const setOptionsListVisible = (isVisible: boolean) => {
        if (!disabled) {
            __setOptionsListVisible(isVisible);
        }
    }

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        const handleClickOutside = (event: MouseEvent) => {
            if (
                headerRef.current
                && popoverRef.current
                && !headerRef.current.contains(event.target as Node)
                && !popoverRef.current.contains(event.target as Node)
            ) {
                setOptionsListVisible(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [headerRef, popoverRef]);

    return { 
        onOptionClick,
        inputValue,
        setInputValue,
        optionsListVisible,
        setOptionsListVisible
    };
}