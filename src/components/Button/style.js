import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 1.2rem 3.2rem;
    border: none;
    border-radius: 0.5rem;

    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    svg{
        color: inherit;
        width: 3.2rem;
        height: 3.2rem;
    }
`;