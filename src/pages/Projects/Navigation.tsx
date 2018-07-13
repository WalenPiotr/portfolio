import * as React from 'react';
import styled from 'styled-components';
import theme from '@constants/theme';
import { IProject } from './index';

const Navigation = ({
    current,
    projects,
    handleClick,
}: {
    current: number;
    projects: IProject[];
    handleClick: (index: number) => () => void;
}) => {
    const Line = styled.div`
        width: ${({ current }: { current: boolean }) =>
            current ? '100%' : '0'};
        transition: width 0.2s linear;
        height: 1px;
        border-bottom: 1px solid ${theme.fontPrimaryColor};
        margin-bottom: 2px;
    `;

    const Button = styled.button`
        font-family: 'Roboto Condensed';
        color: ${theme.fontPrimaryColor};
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:focus {
            outline: none;
        }
        &:hover {
            color: ${theme.fontHighlightColor};
            background-color: ${({ current }: { current: boolean }) =>
                current ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
        }
        background-color: ${({ current }: { current: boolean }) =>
            current ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.0)'};
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
