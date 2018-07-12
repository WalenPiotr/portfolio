import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '@constants/theme';
import media from '@constants/media';

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
        padding-left: 1vh;
        padding-right: 1vh;
        padding-bottom: 1vh;
        padding-top: 1vh;
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

    const List = styled.span`
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
                            <span key={tech}>{tech}. </span>
                        ) : (
                            <span key={tech}>{tech}, </span>
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

export default Pane;
