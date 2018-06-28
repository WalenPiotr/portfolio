import * as React from 'react';
import ITheme from '@typings/ITheme';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <li>
            <FontAwesomeIcon icon={['fab', 'html5']} /> HTML
        </li>
        <li>
            <FontAwesomeIcon icon={['fab', 'css3-alt']} /> CSS
        </li>
        <li>
            <FontAwesomeIcon icon={['fab', 'js-square']} /> JS (ES2017)
        </li>
        <li>
            <FontAwesomeIcon icon={['fab', 'react']} /> React
        </li>
        <li>Redux</li>
        <Section theme={theme} />
        <div>Back-End:</div>
        <li>
            <FontAwesomeIcon icon={['fab', 'node-js']} /> NodeJS
        </li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <Section theme={theme} />
        <div>Other:</div>
        <li>
            <FontAwesomeIcon icon={['fab', 'linux']} /> Linux
        </li>
        <li>
            <FontAwesomeIcon icon={['fab', 'git-square']} /> Git
        </li>
        <li>Keras, Tensorflow (Python)</li>
        <li>OpenCV (Python, Java for Android)</li>
        <Section theme={theme} />
    </Box>
);

export default Skills;
