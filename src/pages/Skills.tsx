import Icon from '@icons/index';
import { media } from '@constants/media';
import { theme } from '@constants/theme';
import * as React from 'react';
import styled from 'styled-components';
const Box = styled.div`
    color: ${theme.fontPrimaryColor};
    font-size: 2.8vh;
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
const Title = styled.span`
    font-size: 35px;
    ${media.sm`
        font-size: 25px;
    `};
`;

const Skills = () => (
    <Box>
        <Title>Skills</Title>
        <Section />
        <div>Front-End:</div>
        <List>
            <Item icon={<Icon.technology.html theme={theme}/>} skill="HTML" />
            <Item icon={<Icon.technology.css theme={theme}/>} skill="CSS" />
            <Item icon={<Icon.technology.js theme={theme}/>} skill="JS (ES2017)" />
            <Item icon={<Icon.technology.ts theme={theme}/>} skill="Typescript" />
            <Item icon={<Icon.technology.react theme={theme}/>} skill="React" />
            <Item icon={<Icon.technology.redux theme={theme}/>} skill="Redux" />
            <Item icon={<Icon.technology.webpack theme={theme}/>} skill="Webpack" />
        </List>
        <Section />
        <List>
            <div>Back-End:</div>
            <Item icon={<Icon.technology.nodejs theme={theme}/>} skill="NodeJS" />
            <Item icon={<Icon.technology.filecode theme={theme}/>} skill="Express" />
            <Item icon={<Icon.technology.mongo theme={theme}/>} skill="MongoDB" />
            <Item icon={<Icon.technology.postgre theme={theme}/>} skill="PostgreSQL" />
        </List>
        <Section />
        <div>Other:</div>
        <List>
            <Item icon={<Icon.technology.linux theme={theme}/>} skill="Linux" />
            <Item icon={<Icon.technology.git theme={theme}/>} skill="Git" />
            <Item icon={<Icon.technology.filecode theme={theme}/>} skill="Keras, Tensorflow (Python)" />
            <Item
                icon={<Icon.technology.filecode theme={theme}/>}
                skill="OpenCV (Python, Java for Android)"
            />
        </List>
        <Section />
    </Box>
);

export default Skills;
