import styled from "styled-components";
import { TextInputSize } from "./text-input";

const sidePaddings: {[key in TextInputSize]: number} = {
    large: 30,
    default: 25,
    small: 20,
}

const heights: {[key in TextInputSize]: number} = {
    large: 55,
    default: 45,
    small: 35,
}

interface StyledWrapperProps {
    width: string;
    innerSize: TextInputSize;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    position: relative;
    width: ${pr => pr.width};
    height: ${ pr => heights[pr.innerSize]}px;
`;

interface StyledTextInputProps {
    innerSize: TextInputSize;
    disabled: boolean;
    disabledBackground: boolean;
    error: boolean;
    width: string;
    withIcon: boolean;
    nonInteractive: boolean;
}


/* Real tag is assigned dynamically */
export const StyledTextInput = styled.input<StyledTextInputProps>`
    box-sizing: border-box;
    position: relative;
    background-color: ${ (pr) => pr.error ? '#ffe3e6' : '#EEEEEE' };
    padding: 0 ${ pr => sidePaddings[pr.innerSize] }px;
    ${ pr => pr.withIcon ? `
        padding: 0 ${ sidePaddings[pr.innerSize] }px 0 ${ sidePaddings[pr.innerSize] * 2 + 10/* icon */ }px;
    ` : ''}
    height: ${ pr => heights[pr.innerSize]}px;
    width: ${pr => pr.width};
    border: none;
    color: #000;
    ${ pr => pr.disabled ? `
    background-color: #a6a6a6;
    color: #5e5e5e;
    cursor: not-allowed;
    
    &:hover {
        background-color: #a6a6a6 !important;
        color: #5e5e5e !important;
    }
    ` : ''}
    border-radius: 0;
    outline: none;
    transition: 0.1s ease-out;
    
    box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : 'transparent'};
    &:focus {
        box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : '#000'};
    }

    ${ pr => pr.nonInteractive ? `
        pointer-events: none;
        box-shadow: none;
        background-color: ${ pr.error ? '#ffe3e6' : pr.disabledBackground ? '#a6a6a6' : '#EEEEEE' };
    ` : ''}
`;

interface StyledIconProps {
    innerSize: TextInputSize;
}

export const StyledIcon = styled.div<StyledIconProps>`
    box-sizing: border-box;
    position: absolute;
    left: ${ pr => sidePaddings[pr.innerSize]}px;
    top: 50%;
    transform: translateY(-50%);

    height: 15px;
`;