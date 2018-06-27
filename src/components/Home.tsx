import * as React from 'react';
import ITheme from '@typings/ITheme';
import styled from 'styled-components';

interface IHome {
    theme: ITheme;
}

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }: { theme: ITheme }) => theme.fontPrimaryColor};
`;

const Name = styled.span`
    font-size: 70px;
`;

const Title = styled.span`
    font-size: 35px;
`;

const Home = ({ theme }: IHome) => (
    <Box theme={theme}>
        <Name>Piotr Waleń</Name>
        <Title>Web Developer</Title>
    </Box>
);

export default Home;
