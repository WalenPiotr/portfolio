import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '@constants/theme';
import media from '@constants/media';

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
    width: 100%;
    padding: 2.5vh;
    width: 70vw;
    ${media.sm`
    width: 60vw;
`};
    ${media.md`
    width: 50vw;
`};
    ${media.lg`
    width: 40vw;
`};
    ${media.xl`
    width: 30vw;
`};

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

    border-radius: 2vh;
    background-color: rgba(255, 255, 255, 0.15);
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 3vh;
    margin-bottom: 1.5vh;
`;

const Subtitile = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2.5vh;
    margin-top: 1.5vh;
`;

const Description = styled.div`
    font-size: 2.5vh;
    text-align: justify;
    text-justify: inter-word;
`;

const UrlBox = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.fontPrimaryColor};
    text-decoration: none;
    font-size: 2vh;
    color: ${theme.fontPrimaryColor};
    &:hover {
        color: ${theme.fontHighlightColor};
    }
`;

const IconBox = styled.div`
    width: 5vh;
    height: 5vh;
`;
const IconsBox = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0);
`;

const Filler = styled.div`
    flex-grow: 1;
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
    background-color: rgba(255, 255, 255, 0.15);
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
            <Subtitile>Technologies</Subtitile>
            <TechList>
                {technologies.map((tech, index) => (
                    <TechWrapper key={tech}>{tech}</TechWrapper>
                ))}
            </TechList>
            <Filler />
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
