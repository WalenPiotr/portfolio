import * as React from 'react';
import styled, { keyframes } from '@styled-components/index';
import media from '@styled-components/media';

const coolBoxKeyframes = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;
const PaneBox = styled.div`
    display: flex;
    flex-direction: column;
    opacity: 100%;
    animation-name: ${coolBoxKeyframes};
    animation-duration: 0.4s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
    padding: 1.5vh;
    flex-shrink: 1;
    flex-grow: 1;
    height: 40vh;
    width: 100%;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2.5vh;
    margin-bottom: 1.5vh;
`;

const Subtitile = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2.5vh;
    margin-top: 1.5vh;
`;

const Description = styled.div`
    font-size: 2vh;
    text-align: justify;
    text-justify: inter-word;
`;

const UrlBox = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 2vh;
`;

const IconBox = styled.div`
    width: 5vh;
    height: 5vh;
`;
const IconsBox = styled.div`
    margin-top: 2vh;
    display: flex;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0);
`;

const Filler = styled.div`
    flex: 1 0 auto;
`;

const TechList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const TechWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props =>
        props.theme.backgroundColors.highlight.current.stringify()};
    height: 4vh;
    font-size: 2vh;
    border-radius: 2vh;
    margin-right: 1vh;
    margin-top: 1vh;
    padding-right: 1vh;
    padding-left: 1vh;
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
    links: Map<string, { url: string; icon: JSX.Element }>;
}) => {
    return (
        <PaneBox>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Filler />
            <Subtitile>Technologies</Subtitile>
            <TechList>
                {technologies.map((tech, index) => (
                    <TechWrapper key={tech}>{tech}</TechWrapper>
                ))}
            </TechList>
            <IconsBox>
                {Array.from(links.entries()).map(
                    ([name, object]: [
                        string,
                        { url: string; icon: JSX.Element }
                    ]) => (
                        <UrlBox href={object.url} key={name}>
                            <IconBox>{object.icon}</IconBox>
                            {name}
                        </UrlBox>
                    ),
                )}
            </IconsBox>
        </PaneBox>
    );
};

export default Pane;
