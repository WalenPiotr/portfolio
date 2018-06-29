import { theme } from '@constants/theme';
import * as React from 'react';
import styled from 'styled-components';
import { media } from '@constants/media';

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${theme.fontPrimaryColor};
`;

const Name = styled.span`
    font-size: 70px;
    ${media.sm`
        font-size: 60px;
    `};
`;

const Title = styled.span`
    font-size: 35px;
    ${media.sm`
        font-size: 25px;
    `};
`;

const Home = () => (
    <Box>
        <Name>Piotr Waleń</Name>
        <Title>Web Developer</Title>
    </Box>
);

export default Home;
