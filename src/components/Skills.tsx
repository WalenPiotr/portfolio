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

const List = styled.ul`
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
`;

const IconWrapper = styled.div`
    width: 30px;
`;

const Item = styled.li`
    display: flex;
`;

const Skills = ({ theme }: ISkills) => (
    <Box theme={theme}>
        <Section theme={theme} />
        <div>Front-End:</div>
        <List>
            <Item>
                <IconWrapper>
                    <FontAwesomeIcon icon={['fab', 'html5']} />
                </IconWrapper>{' '}
                HTML
            </Item>
            <Item>
                <IconWrapper>
                    <FontAwesomeIcon icon={['fab', 'css3-alt']} />
                </IconWrapper>
                CSS
            </Item>
            <Item>
                <IconWrapper>
                    <FontAwesomeIcon icon={['fab', 'js-square']} />
                </IconWrapper>
                JS (ES2017)
            </Item>
            <Item>
                <IconWrapper>
                    <FontAwesomeIcon icon={['fab', 'react']} />
                </IconWrapper>
                React
            </Item>
            <Item>
                <IconWrapper />Redux
            </Item>
            <Item>
                <IconWrapper />Webpack
            </Item>
        </List>
        <Section theme={theme} />
        <List>
            <div>
                <IconWrapper />Back-End:
            </div>
            <Item>
                <IconWrapper>
                    <FontAwesomeIcon icon={['fab', 'node-js']} />
                </IconWrapper>
                NodeJS
            </Item>
            <Item>
                <IconWrapper />Express
            </Item>
            <Item>
                <IconWrapper />MongoDB
            </Item>
            <Item>
                <IconWrapper />PostgreSQL
            </Item>
        </List>
        <Section theme={theme} />
        <div>Other:</div>
        <List>
            <Item>
                <IconWrapper>
                    <FontAwesomeIcon icon={['fab', 'linux']} />
                </IconWrapper>
                Linux
            </Item>
            <Item>
                <IconWrapper>
                    <FontAwesomeIcon icon={['fab', 'git-square']} />
                </IconWrapper>
                Git
            </Item>
            <Item>
                <IconWrapper />Keras, Tensorflow (Python)
            </Item>
            <Item>
                <IconWrapper />OpenCV (Python, Java for Android)
            </Item>
        </List>
        <Section theme={theme} />
    </Box>
);

export default Skills;
