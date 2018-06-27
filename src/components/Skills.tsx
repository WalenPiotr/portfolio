import * as React from 'react';
import ITheme from '@typings/ITheme';
import styled from 'styled-components';

interface ISkills {
    theme: ITheme;
}

const Box = styled.div`
    color: ${({ theme }: { theme: ITheme }) => theme.fontPrimaryColor};
    font-size: 24px;
`;

const Section = styled.div`
    width: 100%;
    border-bottom: 2px dashed
        ${({ theme }: { theme: ITheme }) => theme.fontPrimaryColor};
    margin-top: 8px;
    margin-bottom: 8px;
`;

const Skills = ({ theme }: ISkills) => (
    <Box theme={theme}>
        <Section theme={theme} />
        <div>Front-End:</div>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS (ES2017)</li>
        <li>React</li>
        <li>Redux</li>
        <Section theme={theme} />
        <div>Back-End:</div>
        <li>NodeJS</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <Section theme={theme} />
        <div>Other:</div>
        <li>Linux</li>
        <li>Git</li>
        <li>Keras, Tensorflow (Python)</li>
        <li>OpenCV (Python, Java for Android)</li>
        <Section theme={theme} />
    </Box>
);

export default Skills;
