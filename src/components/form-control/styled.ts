import styled from "styled-components";

export const StyledFormControl = styled.div`
    box-sizing: border-box;
    position: relative;
    margin-bottom: 20px;
`;

interface StyledLabelProps {
    focused: boolean;
    error: boolean;
}

export const StyledLabel = styled.label<StyledLabelProps>`
    display: block;
    position: relative;
    z-index: 2;
    transform: ${pr => pr.focused ? 'translateY(0)' : 'translateY(20px)'};
    opacity: ${pr => pr.focused ? 1 : 0};
    visibility: ${pr => pr.focused ? 'visible' : 'hidden'};
    transition: all 0.2s ease-in;
    font-size: 0.8em;
    font-weight: 500;
    margin-bottom: 5px;
    color: ${pr => pr.error ? '#d93848' : '#000'};
`;

const StyledCaption = styled.span`
    position: absolute;
    font-size: 0.75em;
`;

export const StyledError = styled(StyledCaption)`
    color: #d93848;
`;
export const StyledHint = styled(StyledCaption)`
    color: #545454;
    font-style: italic;
`;