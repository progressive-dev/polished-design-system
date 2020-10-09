import styled from "styled-components";
import { getSpinnerWidth } from "./utils";

interface StyledSpinnerProps {
    size: number;
    light: boolean;
}

export const StyledSpinner = styled.span<StyledSpinnerProps>`
    box-sizing: border-box;
    display: block;
    border: ${pr => getSpinnerWidth(pr.size)}px solid transparent;
    border-top: ${pr => getSpinnerWidth(pr.size)}px solid ${pr => pr.light ? '#f7f7f7' :  '#3d4ed1'};
    border-right: ${pr => getSpinnerWidth(pr.size)}px solid ${pr => pr.light ? '#f7f7f7' :  '#3d4ed1'};
    border-bottom: ${pr => getSpinnerWidth(pr.size)}px solid ${pr => pr.light ? '#f7f7f7' :  '#3d4ed1'};
    border-radius: 50%;
    width: ${pr => pr.size}px;
    height: ${pr => pr.size}px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;