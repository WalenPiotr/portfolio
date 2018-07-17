import * as React from 'react';
import styled, { keyframes } from '@styled-components/index';
import { IProject } from './index';
import { ITheme } from '@styled-components/theme';

const Line = styled.div`
    width: ${({ current }: { current: boolean }) => (current ? '100%' : '0')};
    transition: width 0.2s linear;
    height: 1px;
    border-bottom: 1px solid
        ${props => props.theme.fontPrimaryColor.stringify()};
    margin-bottom: 2px;
`;

interface ButtonProps {
    current: boolean;
    theme?: ITheme;
}
const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:focus {
        outline: none;
    }
    &:hover {
        background-color: ${({ current, theme }: ButtonProps) =>
            current
                ? theme.backgroundColors.highlight.current.stringify()
                : theme.backgroundColors.highlight.hover.stringify()};
    }
    background-color: ${({ current, theme }: ButtonProps) =>
        current
            ? theme.backgroundColors.highlight.current.stringify()
            : theme.backgroundColors.main.stringify()};
    margin-left: 1vh;
    padding-left: 1vh;
    padding-right: 1vh;
    font-size: 2.5vh;
    height: 4vh;
    border-radius: 2vh;
`;

const NavigationBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1.5vh;
`;

const Navigation = ({
    current,
    projects,
    handleClick,
}: {
    current: number;
    projects: IProject[];
    handleClick: (index: number) => () => void;
}) => {
    const titles = projects.map((project, index) => (
        <Button
            key={project.name}
            onClick={handleClick(index)}
            current={current === index}
        >
            {project.name}
        </Button>
    ));
    return <NavigationBox>{titles}</NavigationBox>;
};

export default Navigation;
