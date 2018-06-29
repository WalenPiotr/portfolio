import { theme } from '@constants/theme';
import * as React from 'react';
import styled, { withTheme } from 'styled-components';

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${theme.fontPrimaryColor};
`;

const Name = styled.span`
    font-size: 70px;
`;

const Title = styled.span`
    font-size: 35px;
`;

const Home = () => (
    <Box>
        <Name>Piotr Waleń</Name>
        <Title>Web Developer</Title>
    </Box>
);

export default withTheme(Home);
