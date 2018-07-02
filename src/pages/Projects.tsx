import * as React from 'react';
import styled from 'styled-components';
import theme from '@constants/theme';

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

const PaneGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
`;

const Pane = styled.span`
    width: 30vw;
    height: 20vh;
    margin: 2vh;
    border-bottom: 2px dashed ${theme.fontPrimaryColor};
    border-top: 2px dashed ${theme.fontPrimaryColor};
`;

const Projects = () => (
    <Box>
        <Title>Projects</Title>
        <PaneGroup>
            <Pane />
            <Pane />
            <Pane />
            <Pane />
            <Pane />
            <Pane />
        </PaneGroup>
    </Box>
);

export default Projects;
