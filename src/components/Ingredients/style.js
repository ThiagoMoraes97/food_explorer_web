import styled from 'styled-components'

export const Container = styled.span`
    padding: .4rem .8rem;
    background: ${({theme}) => theme.COLORS.DARK_1000};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    margin-right: 1.2rem;
    border-radius: .5rem;
`;