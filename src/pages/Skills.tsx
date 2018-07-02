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
    font-size: 32px;
    ${media.sm`
        font-size: 24px;
    `};
`;

const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Section = styled.div`
    width: 100%;
    border-bottom: 2px dashed ${theme.fontPrimaryColor};

    margin-top: 5px;
    margin-bottom: 5px;
    ${media.sm`
        margin-top: 2px;
        margin-bottom: 2px;
    `};
`;

const List = styled.ul`
    list-style-type: none;
    list-style-position: inside;
    padding: 0;
    display: block;
    margin: 15px;
    ${media.sm`
        margin: 10px;
    `};
`;

const Item = ({ icon, skill }: { icon: JSX.Element; skill: string }) => {
    const IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        width: 24px;
        margin-right: 5px;
        ${media.sm`
            width: 18px;
            margin-right: 3px;
        `};
    `;

    const ItemBox = styled.div`
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;

        height: 28px;
        font-size: 24px;
        margin-top: 6px;
        ${media.sm`
            height: 18px;
            font-size: 14px;
            margin-top: 3px;
        `};
    `;

    return (
        <ItemBox>
            <IconWrapper>{icon}</IconWrapper>
            {skill}
        </ItemBox>
    );
};

const SkillGroup = styled.div`
    font-size: 26px;
    ${media.sm`
        font-size: 20px;
    `};
`;

const Skills = () => (
    <Box>
        <Title>Skills</Title>
        <ListWrapper>
            <List>
                <Section />
                <SkillGroup>Front-End:</SkillGroup>
                <Section />
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
                <Section />
            </List>
            <List>
                <Section />
                <SkillGroup>Back-End:</SkillGroup>
                <Section />
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
                <Section />
            </List>
            <List>
                <Section />
                <SkillGroup>Other:</SkillGroup>
                <Section />
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
                <Section />
            </List>
        </ListWrapper>
    </Box>
);

export default Skills;
