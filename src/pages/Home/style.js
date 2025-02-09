import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    
`;

export const Main = styled.main`
    padding-inline: 12rem;
    margin: 18rem 0 6rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;

    > section.banner { 
        width: 123rem;
        height: 26rem;
        background: ${({theme}) => theme.COLORS.GRADIENTS_200};
        margin: 0 auto;
        border-radius: .8rem;

        display: flex;
        align-items: center;
        justify-content: center;


        > img{
            width: 63rem;
            height: 40rem;
            align-self: end;
            transform: translateX(-14rem);
        }

        > .section_info{
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            transform: translateX(-5rem);

            h1{ 
                font-family: Poppins;
                font-size: 4rem;
                font-weight: 500;
                line-height: 140%;  
            }

            p{
                font-family: Roboto;
                line-height: 100%;
            }
        }
    }

    .swiper-button-prev {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        transform: translateX(2rem);
    }

    .swiper-button-next {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        transform: translateX(-2rem);
    }

    
`;