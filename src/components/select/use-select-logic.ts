import React, { useEffect, useState, useCallback } from 'react';
import { SelectOption, SelectChangeHandler } from './select';

interface Refs {
    headerRef: React.MutableRefObject<HTMLElement | null>;
    popoverRef: React.MutableRefObject<HTMLElement | null>;
}

export const useSelectLogic = (
    onChange: SelectChangeHandler = () => {},
    { headerRef, popoverRef }: Refs,
    disabled: boolean
) => {
    const [optionsListVisible, __setOptionsListVisible] = useState(false);
    const onOptionClick = (option: SelectOption) => {
        onChange(option);
        setOptionsListVisible(false);
    }

    const setOptionsListVisible = useCallback((isVisible: boolean) => {
        if (!disabled) {
            __setOptionsListVisible(isVisible);
        }
    }, [disabled]);

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
    }, [headerRef, popoverRef, setOptionsListVisible]);

    return { 
        onOptionClick,
        optionsListVisible,
        setOptionsListVisible
    };
}