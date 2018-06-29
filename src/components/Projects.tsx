import * as React from 'react';
import ITheme from '@typings/ITheme';
import styled, { withTheme } from 'styled-components';
import { theme } from '@theme'

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${theme.fontPrimaryColor};
`;

const Title = styled.span`
    font-size: 35px;
`;

const Projects = () => (
    <Box theme={theme}>
        <Title>Projects</Title>
    </Box>
);

export default withTheme(Projects);
