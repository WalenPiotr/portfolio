import Icon from '@components/Icon';
import { theme } from '@constants/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    color: ${theme.fontPrimaryColor};
    font-size: 2.8vh;
`;

const Title = styled.span`
    font-size: 35px;
`;

const Section = styled.div`
    width: 100%;
    border-bottom: 2px dashed ${theme.fontPrimaryColor};
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;
`;

const List = styled.ul`
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
`;

const Item = ({ icon, skill }: { icon: JSX.Element; skill: string }) => {
    const IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3vh;
        height: 100%;
        margin-right: 1vh;
    `;

    const ItemBox = styled.li`
        display: flex;
        align-items: center;
        height: 100%;
    `;

    return (
        <ItemBox>
            <IconWrapper>{icon}</IconWrapper>
            {skill}
        </ItemBox>
    );
};

const Skills = () => (
    <Box>
        <Section />
        <div>Front-End:</div>
        <List>
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'html5']} />}
                skill="HTML"
            />
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'css3']} />}
                skill="CSS"
            />
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'js']} />}
                skill="JS (ES2017)"
            />
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'react']} />}
                skill="React"
            />
            <Item icon={<Icon theme={theme} name={'redux'} />} skill="Redux" />
            <Item
                icon={<Icon theme={theme} name={'webpack'} />}
                skill="Webpack"
            />
        </List>
        <Section />
        <List>
            <div>Back-End:</div>
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'node-js']} />}
                skill="NodeJS"
            />
            <Item
                icon={<FontAwesomeIcon icon={['far', 'file-code']} />}
                skill="Express"
            />
            <Item
                icon={<Icon theme={theme} name={'mongo'} />}
                skill="MongoDB"
            />
            <Item
                icon={<Icon theme={theme} name={'postgre'} />}
                skill="PostgreSQL"
            />
        </List>
        <Section />
        <div>Other:</div>
        <List>
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'linux']} />}
                skill="Linux"
            />
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'git']} />}
                skill="Git"
            />
            <Item
                icon={<FontAwesomeIcon icon={['far', 'file-code']} />}
                skill="Keras, Tensorflow (Python)"
            />
            <Item
                icon={<FontAwesomeIcon icon={['far', 'file-code']} />}
                skill="OpenCV (Python, Java for Android)"
            />
        </List>
        <Section />
    </Box>
);

export default Skills;
