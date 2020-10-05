import styled from "styled-components";
import { ReactComponent as ArrowDown } from '../../icons/arrow-down.svg';
import { SelectSize } from "./select";

const sidePaddings: {[key in SelectSize]: number} = {
    large: 30,
    default: 25,
    small: 20,
}

const heights: {[key in SelectSize]: number} = {
    large: 55,
    default: 45,
    small: 35,
}

interface StyledWrapperProps {
    width: string;
    innerSize: SelectSize;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    box-sizing: border-box;
    position: relative;
    width: calc(${pr => pr.width} + 4px);
    height: ${ pr => heights[pr.innerSize]}px;

`;

interface StyledHeaderProps {
    width: string;
    error: boolean;
    disabled: boolean;
    innerSize: SelectSize;
}

export const StyledHeader = styled.div<StyledHeaderProps>`
    box-sizing: border-box;
    position: relative;
    height: ${ pr => heights[pr.innerSize]}px;
    width: ${pr => pr.width};
    transition: 0.1s ease-out;
    padding: 2px;
    overflow: hidden;

    box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : 'transparent'};
    &:focus {
        outline: none;
        box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : '#000'};
        ${pr => pr.disabled ? `
            box-shadow: none;
        ` : ''}
    }

`;

interface StyledArrowProps {
    innerSize: SelectSize;
    upwards: boolean;
}

export const StyledArrow = styled(ArrowDown)<StyledArrowProps>`
    box-sizing: border-box;
    position: absolute;
    right: ${ pr => sidePaddings[pr.innerSize]}px;
    top: 50%;
    transform: ${ pr => pr.upwards ? 'translateY(-50%) rotateZ(180deg)' : 'translateY(-50%)' };
    transition: transform 0.3s;

    pointer-events: none;
    height: 15px;
`;

interface StyledPopoverProps {
    width: string;
    visible: boolean;
}

export const StyledPopover = styled.div<StyledPopoverProps>`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);

    width: calc(${pr => pr.width} - 4px);
    margin-left: 2px;
    box-sizing: border-box;
    padding: 15px 0;
    box-shadow: 0px 2px 2px -1px rgba(0,0,0,0.2), 0px 4px 5px 1px rgba(0,0,0,0.14), 0px 1px 7px 1px rgba(0,0,0,0.12);

    transition: opacity 0.3s;

    visibility: ${pr => pr.visible ? 'visible' : 'hidden'};
    opacity: ${pr => pr.visible ? 1 : 0};
`;

export const List = styled.ul`
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
`;


interface ListItemProps {
    innerSize: SelectSize;
}

export const ListItem = styled.li<ListItemProps>`
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 6px ${ pr => sidePaddings[pr.innerSize]}px;
    cursor: pointer;

    &:hover {
        background-color: #EEEEEE;
    }
`;