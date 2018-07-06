import * as React from 'react';
import styled from 'styled-components';
import theme from '@constants/theme';

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${theme.fontPrimaryColor};
`;

const Title = styled.span`
    font-size: 35px;
`;

const PaneGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
`;

const PaneBox = styled.span`
    margin: 2vh;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 300px;
    border-bottom: 2px dashed ${theme.fontPrimaryColor};
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
    const Title = styled.div`
        display: flex;
        justify-content: center;
        font-size: 24px;
        padding-bottom: 10px;
        border-bottom: 2px dashed ${theme.fontPrimaryColor};
    `;
    const Subtitile = styled.div`
        padding-top: 10px;
        font-size: 20px;
    `;
    const List = styled.ul`
        font-size: 16px;
        margin: 0px;
    `;

    const Standard = styled.div`
        font-size: 16px;
    `;
    const Link = styled.a`
        color: ${theme.fontPrimaryColor};
    `;

    return (
        <PaneBox>
            <Title>{name}</Title>
            <Subtitile>Technologies: </Subtitile>
            <List>{technologies.map(tech => <li>{tech}</li>)}</List>
            <Subtitile>Description: </Subtitile>
            <Standard>{description}</Standard>
            <Subtitile> Links: </Subtitile>
            <List>
                {Array.from(links.entries()).map(
                    ([name, url]: [string, string]) => (
                        <li>
                            <Link href={url}>{name}</Link>
                        </li>
                    ),
                )}
            </List>
        </PaneBox>
    );
};

const projects = {};

const Projects = () => (
    <Box>
        <Title>Projects</Title>
        <PaneGroup>
            <Pane
                name={'Yet Another To-Do List'}
                technologies={[
                    'TypeScript',
                    'React',
                    'Redux',
                    'styled-components',
                    'NodeJS',
                    'Express',
                    'PostgreSQL',
                ]}
                description={'Todo list app created with TypeScript.'}
                links={
                    new Map([
                        [
                            'Source code',
                            'https://github.com/WalenPiotr/YetAnotherToDoApp',
                        ],
                        [
                            'Demo page',
                            'https://todos-typescript.herokuapp.com/',
                        ],
                    ])
                }
            />
            <Pane
                name={'Scrabble Detector'}
                technologies={[
                    'Python',
                    'Keras',
                    'Tensorflow',
                    'OpenCV',
                    'Android (Java)',
                    'JUnit',
                ]}
                description={
                    'Application detects game board and tiles with letter, using OpenCV image processing library, then classifies each tile with two convolutional neural networks built in Keras, and finally counts points for each player turn.'
                }
                links={
                    new Map([
                        [
                            'Source code',
                            'https://github.com/WalenPiotr/Scrabble-Detector',
                        ],
                    ])
                }
            />
            <Pane
                name={'Rate Car'}
                technologies={['NodeJS', 'Express', 'MongoDB', 'EJS Templates']}
                description={
                    'Car review application with server side rendering, user authentication and authorization.'
                }
                links={
                    new Map([
                        [
                            'Source code',
                            'https://github.com/WalenPiotr/Rate-Car',
                        ],
                        ['Demo page', 'https://rate-car.herokuapp.com/'],
                    ])
                }
            />
        </PaneGroup>
    </Box>
);

export default Projects;
