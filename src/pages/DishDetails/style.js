import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 4.2rem;
    margin: 2.4rem auto 0;
    width: 123rem;
    font-family: Poppins, sans-serif;
    text-align: justify;

    >:nth-child(1){
        align-self: start;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 140%;
    }

    > .dish_info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4.8rem;

        > img{
            width: 39rem;
            height: 39rem;
        }

        > .dish_description{

            h1{
                
                font-size: 4rem;
                font-weight: 500;
                line-height: 140%; 
                color: ${({theme}) => theme.COLORS.LIGHT_300};
                margin-bottom: 2.4rem;
            }

            p{
                font-size: 24px;
                line-height: 140%;
                color: ${({theme}) => theme.COLORS.LIGHT_300};
                margin-bottom: 2.4rem;
            }

            .add_dish{
                margin-top: 4.8rem;
                display: flex;
                gap: 3.3rem;
                align-items: center;

                > .add_button{
                    display: flex;
                    align-items: center;
                    gap: 1.4rem;
                    color: ${({theme}) => theme.COLORS.LIGHT_300};

                    font-size: 2rem;
                    font-family: Roboto;
                    font-weight: 700;
                    line-height: 160%;

                    button{
                        background: none;
                        border: none;
                        color: inherit;
                        font-size: 1.5rem;
                            
                        svg{
                            font-size: 2rem;
                        }
                    }
                }

                .insert_button{
                    padding: 1.2rem 2.4rem;
                    border-radius: 0.5rem;
                    border: none;
                    background: ${({theme}) => theme.COLORS.TOMATO_100};
                    color: ${({theme}) => theme.COLORS.LIGHT_100};

                    font-family: Poppins, sans-serif;
                    font-weight: 500;
                    line-height: 2.4rem;
                    font-size: 1.4rem;
                }
            }
        }
    }
`;