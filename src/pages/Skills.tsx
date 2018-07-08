import Icon from '@icons/index';
import media from '@constants/media';
import theme from '@constants/theme';
import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    color: ${theme.fontPrimaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    border-top: 1px solid ${theme.fontPrimaryColor};
    border-bottom: 1px solid ${theme.fontPrimaryColor};
    
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    padding-right: 0;
    padding-left: 0;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
`;

const Item = ({ icon, skill }: { icon: JSX.Element; skill: string }) => {
    const IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 2.5vh;
        margin-right: 0.5vh;
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
                <Item
                    icon={<Icon.technology.html theme={theme} />}
                    skill="HTML"
                />
                <Item
                    icon={<Icon.technology.css theme={theme} />}
                    skill="CSS"
                />
                <Item
                    icon={<Icon.technology.js theme={theme} />}
                    skill="JS (ES2017)"
                />
                <Item
                    icon={<Icon.technology.ts theme={theme} />}
                    skill="Typescript"
                />
                <Item
                    icon={<Icon.technology.react theme={theme} />}
                    skill="React"
                />
                <Item
                    icon={<Icon.technology.redux theme={theme} />}
                    skill="Redux"
                />
                <Item
                    icon={<Icon.technology.webpack theme={theme} />}
                    skill="Webpack"
                />
            </List>
            <List>
                <SkillGroup>Back-End</SkillGroup>
                <Item
                    icon={<Icon.technology.nodejs theme={theme} />}
                    skill="NodeJS"
                />
                <Item
                    icon={<Icon.technology.filecode theme={theme} />}
                    skill="Express"
                />
                <Item
                    icon={<Icon.technology.mongo theme={theme} />}
                    skill="MongoDB"
                />
                <Item
                    icon={<Icon.technology.postgre theme={theme} />}
                    skill="PostgreSQL"
                />
            </List>
            <List>
                <SkillGroup>Other</SkillGroup>
                <Item
                    icon={<Icon.technology.linux theme={theme} />}
                    skill="Linux"
                />
                <Item
                    icon={<Icon.technology.git theme={theme} />}
                    skill="Git"
                />
                <Item
                    icon={<Icon.technology.filecode theme={theme} />}
                    skill="Keras, Tensorflow (Python)"
                />
                <Item
                    icon={<Icon.technology.filecode theme={theme} />}
                    skill="OpenCV (Python, Java for Android)"
                />
            </List>
        </ListWrapper>
    </Box>
);

export default Skills;
