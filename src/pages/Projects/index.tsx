import * as React from 'react';
import Icon from '@icons/index';
import styled, { keyframes } from '@styled-components/index';
import media from '@styled-components/media';
import Navigation from './Navigation';
import Pane from './Pane';

const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 66vh;
    ${media.sm`
        height: 62vh;
    `};
    ${media.md`
        height: 58vh;
    `};
    ${media.lg`
        height: 54vh;
    `};
    ${media.xl`
        height: 50vh;
    `};
`;

const Title = styled.span`
    font-size: 4vh;
    margin-bottom: 2vh;
`;

const ProjectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    border: none;
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    width: 10vw;
    &:focus {
        outline: none;
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export interface IProject {
    name: string;
    technologies: string[];
    description: string;
    links: Map<string, { url: string; icon: JSX.Element }>;
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
                                <Icon.navigation.left />
                            </IconWrapper>

                            <Text>prev</Text>
                        </Arrow>
                    </ArrowButton>
                    <PaneWrapper>{this.panes[this.state.current]}</PaneWrapper>
                    <ArrowButton onClick={this.handleNext}>
                        <Arrow>
                            <IconWrapper>
                                <Icon.navigation.right />
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
