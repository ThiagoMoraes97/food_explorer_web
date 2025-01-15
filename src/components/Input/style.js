import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    border-radius: 0.8rem;
    

    input {
        width: 100%;
        padding: 1.2rem 1.4rem;
        border: none;
        border-radius: inherit;
        background: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-family: Roboto, sans-serif;
        line-height: 100%;
        
        &:focus {
            outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        width: 24px;
        height: 24px;
        margin-left: 2rem;
    }
`;