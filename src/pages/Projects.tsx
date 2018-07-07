import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '@constants/theme';
import Icon from '@icons/index';
import media from '@constants/media';

const Box = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${theme.fontPrimaryColor};
`;

const Title = styled.span`
    font-size: 4vh;
    margin-bottom: 2vh;
`;

const Pane = ({
    name,
    description,
    technologies,
    links,
}: {
    name: string;
    description: string;
    technologies: string[];
    links: Map<string, string>;
}) => {
    const coolBoxKeyframes = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;
    const PaneBox = styled.span`
        border-top: 2px dashed ${theme.fontPrimaryColor};
        border-bottom: 2px dashed ${theme.fontPrimaryColor};
        opacity: 100%;
        animation-name: ${coolBoxKeyframes};
        animation-duration: 0.4s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-fill-mode: forwards;
        animation-play-state: running;

        width: 60vw;
        padding-bottom: 2vh;
        padding-top: 2vh;
        margin-left: 2vw;
        margin-right: 2vw;
        margin-bottom: 2vh;
    `;

    const Title = styled.div`
        display: flex;
        justify-content: center;
        font-size: 3vh;
    `;

    const Subtitile = styled.div`
        font-size: 2.5vh;
        margin-top: 1vh;
    `;

    const List = styled.ul`
        font-size: 2.5vh;
        margin: 0;
    `;

    const Standard = styled.div`
        font-size: 2.5vh;
    `;
    const Link = styled.a`
        color: ${theme.fontPrimaryColor};
    `;

    return (
        <PaneBox>
            <Title>{name}</Title>
            <Subtitile>Technologies: </Subtitile>
            <List>
                {technologies.map(
                    (tech, index) =>
                        index == technologies.length - 1 ? (
                            <li key={tech}>{tech}. </li>
                        ) : (
                            <li key={tech}>{tech}, </li>
                        ),
                )}
            </List>
            <Subtitile>Description: </Subtitile>
            <Standard>{description}</Standard>
            <Subtitile> Links: </Subtitile>
            <List>
                {Array.from(links.entries()).map(
                    ([name, url]: [string, string]) => (
                        <li key={name}>
                            <Link href={url}>{name}</Link>
                        </li>
                    ),
                )}
            </List>
        </PaneBox>
    );
};

const ProjectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

interface IProject {
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

const Arrow = styled.button`
    font-family: 'Roboto Condensed';
    color: ${theme.fontPrimaryColor};
    border: none;
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
                    <Arrow onClick={this.handlePrevious}>
                        <IconWrapper>
                            <Icon.navigation.left theme={theme} />
                        </IconWrapper>

                        <Text>previous</Text>
                    </Arrow>
                    {this.panes[this.state.current]}
                    <Arrow onClick={this.handleNext}>
                        <IconWrapper>
                            <Icon.navigation.right theme={theme} />
                        </IconWrapper>
                        <Text>next</Text>
                    </Arrow>
                </ProjectBox>
            </Box>
        );
    }
}

const Line = styled.div`
    width: ${({ current }: { current: boolean }) => (current ? '100%' : '0')};
    transition: width 0.2s linear;
    border-bottom: 2px dashed ${theme.fontPrimaryColor};
    margin-bottom: 2px;
`;

const Button = styled.button`
    font-family: 'Roboto Condensed';
    color: ${theme.fontPrimaryColor};
    border: none;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:focus {
        outline: none;
    }
    &:hover {
        color: ${theme.fontHighlightColor};
    }
    &:hover ${Line} {
        border-bottom: 2px dashed ${theme.fontHighlightColor};
    }
    margin-left: 1vh;
    font-size: 2vh;
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
        <Button key={project.name} onClick={handleClick(index)}>
            <Line key={project.name} current={current === index} />
            {project.name}
        </Button>
    ));
    return <NavigationBox>{titles}</NavigationBox>;
};

export default Projects;
