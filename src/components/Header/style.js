import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK_600};

    >.header_content{
        padding-inline: 12rem;
        padding-block: 2.4rem;
        max-width: 150rem;
        margin: 0 auto;

        display: flex;
        align-items: center;
        gap: 3.2rem;

        :nth-child(2){
            &:focus {
                outline: none;
            }
        }

        :nth-child(3){
            max-width: 22rem;
        }
    
        :nth-child(4){
            background: none;
            border: none;
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            font-size: 3.2rem;
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: start;


    > .logo_info{
        width: 15rem;
        display: flex;
        flex-direction: column;
        align-items: end;
        font-family: Roboto;

        > h2{
            font-size: 24px;
            font-weight: 700;
            line-height: normal;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }

        > small{
            font-size: 12px;
            font-weight: 400;
            line-height: 160%;
            color: ${({theme}) => theme.COLORS.CAKE_100};
        }
    }

    > img{
        width: 3rem;
        height: 3rem;
    }
`;