import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '@constants/theme';
import Icon from '@icons/index';
import media from '@constants/media';
import Navigation from './Navigation';
import Pane from './Pane';

export interface IProject {
    name: string;
    technologies: string[];
    description: string;
    links: Map<string, string>;
}

interface ProjectsState {
    current: number;
}

interface ProjectsProps {
    projects: IProject[];
}

class Projects extends React.Component<ProjectsProps, any> {
    state: ProjectsState = {
        current: 0,
    };
    panes = this.props.projects.map((project, index) => (
        <Pane
            key={project.name}
            name={project.name}
            links={project.links}
            description={project.description}
            technologies={project.technologies}
        />
    ));

    handleNext = () => {
        if (this.state.current < this.panes.length - 1) {
            this.setState((prevState: ProjectsState) => ({
                ...prevState,
                current: prevState.current + 1,
            }));
        } else {
            this.setState((prevState: ProjectsState) => ({
                ...prevState,
                current: 0,
            }));
        }
    };

    handlePrevious = () => {
        if (this.state.current > 0) {
            this.setState((prevState: ProjectsState) => ({
                ...prevState,
                current: prevState.current - 1,
            }));
        } else {
            this.setState((prevState: ProjectsState) => ({
                ...prevState,
                current: this.panes.length - 1,
            }));
        }
    };

    handleClick = (index: number) => () => {
        this.setState((prevState: ProjectsState) => ({
            ...prevState,
            current: index,
        }));
    };

    render() {
        const Box = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: ${theme.backgroundColor};
            width: 100vw;
        `;

        const Title = styled.span`
            font-size: 4vh;
            margin-bottom: 2vh;
        `;

        const ProjectBox = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            height: 60vh;
            ${media.sm`
                height: 55vh;
            `};
            ${media.md`
                height: 50vh;
            `};
            ${media.lg`
                height: 45vh;
            `};
            ${media.xl`
                height: 40vh;
            `};
        `;

        const Arrow = styled.div`
            font-family: 'Roboto Condensed';
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `;

        const ArrowButton = styled.button`
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${theme.fontPrimaryColor};
            border: none;
            background-color: rgba(0, 0, 0, 0);
            height: 100%;
            width: 8vw;
            &:focus {
                outline: none;
            }
            &:hover {
                color: ${theme.fontHighlightColor};
            }
        `;

        const IconWrapper = styled.div`
            width: 4vh;
            height: 4vh;
        `;

        const Text = styled.div`
            font-size: 2vh;
        `;

        const PaneWrapper = styled.div`
            border-top: 1px solid ${theme.fontPrimaryColor};
            border-bottom: 1px solid ${theme.fontPrimaryColor};
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        `;

        return (
            <Box>
                <Title>Projects</Title>
                <Navigation
                    current={this.state.current}
                    projects={this.props.projects}
                    handleClick={this.handleClick}
                />
                <ProjectBox>
                    <ArrowButton onClick={this.handlePrevious}>
                        <Arrow>
                            <IconWrapper>
                                <Icon.navigation.left theme={theme} />
                            </IconWrapper>

                            <Text>prev</Text>
                        </Arrow>
                    </ArrowButton>
                    <PaneWrapper>{this.panes[this.state.current]}</PaneWrapper>
                    <ArrowButton onClick={this.handleNext}>
                        <Arrow>
                            <IconWrapper>
                                <Icon.navigation.right theme={theme} />
                            </IconWrapper>
                            <Text>next</Text>
                        </Arrow>
                    </ArrowButton>
                </ProjectBox>
            </Box>
        );
    }
}

export default Projects;
