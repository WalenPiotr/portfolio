import * as Icon from '@components/Icon';
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
            <Item icon={<Icon.html />} skill="HTML" />
            <Item icon={<Icon.css />} skill="CSS" />
            <Item icon={<Icon.js />} skill="JS (ES2017)" />
            <Item icon={<Icon.ts />} skill="Typescript" />
            <Item icon={<Icon.react />} skill="React" />
            <Item icon={<Icon.redux />} skill="Redux" />
            <Item icon={<Icon.webpack />} skill="Webpack" />
        </List>
        <Section />
        <List>
            <div>Back-End:</div>
            <Item icon={<Icon.nodejs />} skill="NodeJS" />
            <Item icon={<Icon.filecode />} skill="Express" />
            <Item icon={<Icon.mongo />} skill="MongoDB" />
            <Item icon={<Icon.postgre />} skill="PostgreSQL" />
        </List>
        <Section />
        <div>Other:</div>
        <List>
            <Item icon={<Icon.linux />} skill="Linux" />
            <Item icon={<Icon.git />} skill="Git" />
            <Item icon={<Icon.filecode />} skill="Keras, Tensorflow (Python)" />
            <Item
                icon={<Icon.filecode />}
                skill="OpenCV (Python, Java for Android)"
            />
        </List>
        <Section />
    </Box>
);

export default Skills;
