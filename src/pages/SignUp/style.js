import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
    padding-inline: 10rem;

    main {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 30rem;
        font-family: Roboto, sans-serif;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.9rem;
    align-self: center;

    h2{
        font-size: 4.2rem;
        font-weight: 700;
        line-height: normal;
    }
`;

export const Form = styled.form`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 47.6rem;

    h1{
        text-align: center;
        font-family: Poppins, sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%; 
    }

    .input-wrapper label{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        line-height: 100%; 
        margin-bottom: .8rem;
        display: inline-block;
    }
`;