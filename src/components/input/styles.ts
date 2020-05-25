import styled, {css} from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`

    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    color: #666360;
    border: 2px solid #232129;

    display: flex;
    align-items: center;

    ${props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${props => props.isFilled && css`
        color: #ff9000;
    `}

    input {
        color: #F4EDE8;
        flex: 1;
        border: 0;
        background: transparent;
        &::placeholder {
            color: #666360;
        }
    }

    & + div {
        margin-top: 8px;
    }

    svg {
        margin-right: 16px;
    }
`;
