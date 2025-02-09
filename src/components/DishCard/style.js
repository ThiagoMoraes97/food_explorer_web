import styled from 'styled-components';

export const Container = styled.div`
    padding: 2.4rem;
    width: 30rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    border-radius: 0.8rem;
    position: relative;

    background: ${({theme}) => theme.COLORS.DARK_300};

    > .iconButton{
        background: none;
        border: none;

        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 2.4rem;
        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
    }

    > h2{
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        text-align: center;
        font-family: Poppins;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 140%;
    }

    > p{
        font-family: Roboto;
        font-size: 1.4rem;
        line-height: 160%;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    > span{
        font-family: Roboto;
        font-size: 3.2rem;
        line-height: 160%;
        color: ${({theme}) => theme.COLORS.CAKE_100};
    }

    > .add_dish{
      display: flex;
      gap: 1.6rem;
      align-items: center;

      > .add_button{
            display: flex;
            align-items: center;
            gap: 1.4rem;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 2rem;

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
        }
    }
`;