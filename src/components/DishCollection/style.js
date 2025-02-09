import styled from 'styled-components';

export const Container = styled.section`
    margin-inline: auto;
    width: 123rem;

    > h2{
        font-family: Poppins;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%; 
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        margin-bottom: 2.3rem;
    }

`;

export const Dishes = styled.div`
    width: 100%;
    display: flex;
    gap: 2.7rem;
    overflow-x: auto;
    position: relative;

   &.swiper-active{
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 110px; 
        height: 100%;
        z-index: 2;
        pointer-events: none; 
    }

    &::before {
    left: 0;
    background: linear-gradient(
        to left,
        rgba(0, 10, 15, 0) 0%,
        rgba(0, 10, 15, 0.15) 20%,  
        rgba(0, 10, 15, 0.3) 40%,  
        rgba(0, 10, 15, 0.6) 60%,  
        rgba(0, 10, 15, 0.8) 80%, #000A0F 100% )
    }

    &::after {
    right: 0;
    background: linear-gradient(
        to right,
        rgba(0, 10, 15, 0) 0%,
        rgba(0, 10, 15, 0.15) 20%,  
        rgba(0, 10, 15, 0.3) 40%,  
        rgba(0, 10, 15, 0.6) 60%,  
        rgba(0, 10, 15, 0.8) 80%, #000A0F 100% )
    }
    }
    
`;