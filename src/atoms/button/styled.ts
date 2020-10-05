import styled from "styled-components";
import { ButtonSize, ButtonType } from "./button";

type StateColors = {
    regular: string;
    hover: string;
}

const typeColors: {[key in ButtonType]: StateColors} = {
    default: {
        regular: '#0018cf',
        hover: '#2e27cc',
    },
    danger: {
        regular: '#d93848',
        hover: '#eb4d5d',
    },
    ghost: {
        regular: 'transparent',
        hover: '#dbdbdb',
    },
    secondary: {
        regular: '#616161',
        hover: '#3d3d3d',
    }
};

const sidePaddings: {[key in ButtonSize]: string} = {
    large: '35px',
    default: '30px',
    small: '25px',
}

const heights: {[key in ButtonSize]: string} = {
    large: '55px',
    default: '45px',
    small: '35px',
}

interface StyledButtonProps {
    innerType: ButtonType;
    size: ButtonSize;
}

/* Real tag is assigned dynamically */
export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    /* Add margin in case of loading or icon */
    & > *:nth-child(1) {
        margin-left: 7px;
    }

    border: none;
    cursor: pointer;
    background-color: ${ (pr) => typeColors[pr.innerType].regular };
    padding: 0 ${ pr => sidePaddings[pr.size]};
    height: ${ pr => heights[pr.size]};
    color: ${ pr => pr.innerType === 'ghost' 
        ? typeColors['default'].regular
        : '#fff'
    };
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

    &:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ${ (pr) => typeColors[pr.innerType].regular };
    }
    &:hover {
        background-color: ${ (pr) => typeColors[pr.innerType].hover };
    }
`;

export const StyledIcon = styled.div`
    height: 20px;
`;