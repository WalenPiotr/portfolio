import Icon from '@icons/index';
import media from '@constants/media';
import * as React from 'react';
import styled from '@styled-components/index';

const Box = styled.div`
    color: ${props => props.theme.fontPrimaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.backgroundColor};
    width: 100vw;
`;

const Title = styled.span`
    height: 4.5vh;
    font-size: 4vh;
    margin-bottom: 1.5vh;
`;

const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const List = styled.ul`
    list-style-type: none;
    list-style-position: inside;
    padding: 0;
    display: block;
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-left: 1vw;
    margin-right: 1vw;
    padding: 1.5vh;
    border-radius: 2vh;
    background-color: rgba(255, 255, 255, 0.15);
`;

const Item = ({ icon, skill }: { icon: JSX.Element; skill: string }) => {
    const IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 2.5vh;
        margin-right: 1vh;
    `;

    const ItemBox = styled.div`
        height: 3.5vh;
        font-size: 2.5vh;
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
    `;

    return (
        <ItemBox>
            <IconWrapper>{icon}</IconWrapper>
            {skill}
        </ItemBox>
    );
};

const SkillGroup = styled.div`
    font-size: 3.5vh;
    margin-bottom: 1vh;
    display: flex;
    justify-content: center;
`;

const Skills = () => (
    <Box>
        <Title>Skills</Title>
        <ListWrapper>
            <List>
                <SkillGroup>Front-End</SkillGroup>
                <Item icon={<Icon.technology.html />} skill="HTML" />
                <Item icon={<Icon.technology.css />} skill="CSS" />
                <Item icon={<Icon.technology.js />} skill="JS (ES2017)" />
                <Item icon={<Icon.technology.ts />} skill="Typescript" />
                <Item icon={<Icon.technology.react />} skill="React" />
                <Item icon={<Icon.technology.redux />} skill="Redux" />
                <Item icon={<Icon.technology.webpack />} skill="Webpack" />
            </List>
            <List>
                <SkillGroup>Back-End</SkillGroup>
                <Item icon={<Icon.technology.nodejs />} skill="NodeJS" />
                <Item icon={<Icon.technology.filecode />} skill="Express" />
                <Item icon={<Icon.technology.mongo />} skill="MongoDB" />
                <Item icon={<Icon.technology.postgre />} skill="PostgreSQL" />
            </List>
            <List>
                <SkillGroup>Other</SkillGroup>
                <Item icon={<Icon.technology.linux />} skill="Linux" />
                <Item icon={<Icon.technology.git />} skill="Git" />
                <Item
                    icon={<Icon.technology.filecode />}
                    skill="Keras, Tensorflow (Python)"
                />
                <Item
                    icon={<Icon.technology.filecode />}
                    skill="OpenCV (Python, Java for Android)"
                />
            </List>
        </ListWrapper>
    </Box>
);

export default Skills;
