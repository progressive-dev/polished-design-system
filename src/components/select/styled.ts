import styled from "styled-components";
import { ComponentSize, heights, sidePaddings } from "../../config/sizes";
import ArrowDown from '../../icons/ArrowDown';

interface StyledWrapperProps {
    width: string;
    innerSize: ComponentSize;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    box-sizing: border-box;
    position: relative;
    width: ${pr => pr.width};
    height: ${ pr => heights[pr.innerSize]}px;
`;

export const StyledHeader = styled.div`
    box-sizing: border-box;
    position: relative;

    input:not([disabled]) {
        cursor: pointer;
    }
`;

interface StyledArrowProps {
    innerSize: ComponentSize;
    upwards: boolean;
}

export const StyledArrow = styled(ArrowDown).withConfig({
    shouldForwardProp: (prop, defPropValFN) =>
      !["innerSize", "upwards"].includes(prop) && defPropValFN(prop),
  })<StyledArrowProps>`
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

    width: ${pr => pr.width};
    box-sizing: border-box;
    padding: 15px 0;
    background-color: #fff;
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
    innerSize: ComponentSize;
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