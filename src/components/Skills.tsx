import * as React from 'react';
import ITheme from '@typings/ITheme';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@components/Icon';
interface ISkills {
    theme: ITheme;
}

const Box = styled.div`
    color: ${({ theme }: { theme: ITheme }) => theme.fontPrimaryColor};
    font-size: 2.8vh;
`;

const Title = styled.span`
    font-size: 35px;
`;

const Section = styled.div`
    width: 100%;
    border-bottom: 2px dashed
        ${({ theme }: { theme: ITheme }) => theme.fontPrimaryColor};
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;
`;

const List = styled.ul`
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
`;

const Item = ({
    icon,
    skill,
    theme,
}: {
    icon: JSX.Element;
    skill: string;
    theme: ITheme;
}) => {
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
            <IconWrapper theme={theme}>{icon}</IconWrapper>
            {skill}
        </ItemBox>
    );
};

const Skills = ({ theme }: ISkills) => (
    <Box theme={theme}>
        <Section theme={theme} />
        <div>Front-End:</div>
        <List>
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'html5']} />}
                skill="HTML"
                theme={theme}
            />
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'css3']} />}
                skill="CSS"
                theme={theme}
            />
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'js']} />}
                skill="JS (ES2017)"
                theme={theme}
            />
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'react']} />}
                skill="React"
                theme={theme}
            />
            <Item
                icon={<Icon theme={theme} name={'redux'} />}
                skill="Redux"
                theme={theme}
            />
            <Item
                icon={<Icon theme={theme} name={'webpack'} />}
                skill="Webpack"
                theme={theme}
            />
        </List>
        <Section theme={theme} />
        <List>
            <div>Back-End:</div>
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'node-js']} />}
                skill="NodeJS"
                theme={theme}
            />
            <Item
                icon={<FontAwesomeIcon icon={['far', 'file-code']} />}
                skill="Express"
                theme={theme}
            />
            <Item
                icon={<Icon theme={theme} name={'mongo'} />}
                skill="MongoDB"
                theme={theme}
            />
            <Item
                icon={<Icon theme={theme} name={'postgre'} />}
                skill="PostgreSQL"
                theme={theme}
            />
        </List>
        <Section theme={theme} />
        <div>Other:</div>
        <List>
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'linux']} />}
                skill="Linux"
                theme={theme}
            />
            <Item
                icon={<FontAwesomeIcon icon={['fab', 'git']} />}
                skill="Git"
                theme={theme}
            />
            <Item
                icon={<FontAwesomeIcon icon={['far', 'file-code']} />}
                skill="Keras, Tensorflow (Python)"
                theme={theme}
            />
            <Item
                icon={<FontAwesomeIcon icon={['far', 'file-code']} />}
                skill="OpenCV (Python, Java for Android)"
                theme={theme}
            />
        </List>
        <Section theme={theme} />
    </Box>
);

export default Skills;
