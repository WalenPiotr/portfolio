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

const Title = styled.span`
    font-size: 35px;
`;

const Projects = ({ theme }: IHome) => (
    <Box theme={theme}>
        <Title>Projects</Title>
    </Box>
);

export default Projects;
