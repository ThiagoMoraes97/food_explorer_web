import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
    padding-inline: clamp(1rem, 2.5vw, 5rem);

    main {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 30rem;
        font-family: Roboto, sans-serif;

        @media (max-width: 48rem) {
            flex-direction: column;
            gap: 5rem;
            align-items: center;
        }
    }
   
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.9rem;
    align-self: center;

    h2{
        font-size: clamp(3.7rem, 2vw, 4.2rem);
        font-weight: 700;
        line-height: normal;
    }
`;

export const Form = styled.form`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: clamp(5rem, 3vw, 6.4rem);
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 47.6rem;

    @media (max-width: 48rem) {
        background: none;
        width: 31.6rem;
        padding: initial;
    }

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
        margin-bottom: 1rem;
        display: inline-block;
    }


`;