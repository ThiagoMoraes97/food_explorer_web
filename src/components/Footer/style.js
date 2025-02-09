import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    padding-inline: 12rem;
    padding-block: 2.4rem;
    background-color: ${({theme}) => theme.COLORS.DARK_600};

    color: ${({theme}) => theme.COLORS.LIGHT_200};
    font-family: Roboto;
    font-size: 1.4rem;
    line-height: 160%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    > h2{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_700};
    }

    > img{
        width: 3rem;
        height: 3rem;


    }
`;