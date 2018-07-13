import Pages from '@components/Pages';
import Navbar from '@containers/Navbar';
import Credits from '@pages/Credits';
import Home from '@pages/Home';
import Projects from '@pages/Projects';
import Skills from '@pages/Skills';
import IView from '@typings/IView';
import * as React from 'react';
import styled from 'styled-components';
import theme from '@constants/theme';
import Icon from '@icons/index';
import { IProject } from '@pages/Projects';

const projects: IProject[] = [
    {
        name: 'Yet Another To-Do List',
        technologies: [
            'TypeScript',
            'React',
            'Redux',
            'styled-components',
            'NodeJS',
            'Express',
            'PostgreSQL',
        ],
        description:
            'Todo list app created with TypeScript. Postgre and Node backend with CRUD routes. Frontend based on React Redux store. ',
        links: new Map([
            [
                'Source code',
                {
                    url: 'https://github.com/WalenPiotr/YetAnotherToDoApp',
                    icon: <Icon.technology.filecode />,
                },
            ],
            [
                'Demo page',
                {
                    url: 'https://todos-typescript.herokuapp.com/',
                    icon: <Icon.other.desktop />,
                },
            ],
        ]),
    },
    {
        name: 'Scrabble Detector',
        technologies: [
            'Python',
            'Keras',
            'Tensorflow',
            'OpenCV',
            'Android (Java)',
            'JUnit',
        ],
        description:
            'Automatic point counting system for Scrabble game. Application detects game board and tiles with letter, using OpenCV image processing library, then classifies each tile with two convolutional neural networks built in Keras, and finally counts points for each player turn.',
        links: new Map([
            [
                'Source code',
                {
                    url: 'https://github.com/WalenPiotr/Scrabble-Detector',
                    icon: <Icon.technology.filecode />,
                },
            ],
        ]),
    },
    {
        name: 'Rate Car',
        technologies: ['NodeJS', 'Express', 'MongoDB', 'EJS Templates'],
        description:
            'Car review application with server side rendering, user authentication and authorization.',
        links: new Map([
            [
                'Source code',
                {
                    url: 'https://github.com/WalenPiotr/Rate-Car',
                    icon: <Icon.technology.filecode />,
                },
            ],
            [
                'Demo page',
                {
                    url: 'https://rate-car.herokuapp.com/',
                    icon: <Icon.other.desktop />,
                },
            ],
        ]),
    },
];

const views = [
    { name: 'Home', component: <Home /> },
    {
        name: 'Skills',
        component: <Skills />,
    },
    {
        name: 'Projects',
        component: <Projects projects={projects} />,
    },
    {
        name: 'Credits',
        component: <Credits />,
    },
];

export interface AppProps {
    setCurrentPage: (page: number) => void;
    currentPage: number;
}
class App extends React.Component<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
        this.boxes = new Map<IView, HTMLDivElement>();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {
            passive: true,
        });
        const currentPage = Math.round(window.pageYOffset / window.innerHeight);
        this.props.setCurrentPage(currentPage);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event: Event) => {
        const currentPage = Math.round(window.pageYOffset / window.innerHeight);
        if (currentPage !== this.props.currentPage) {
            this.props.setCurrentPage(currentPage);
        }
    };

    boxes: Map<IView, HTMLDivElement>;

    createHandler = (view: IView) => (): void => {
        window.scrollTo({
            top:
                this.boxes.get(view).offsetTop +
                this.boxes.get(view).offsetHeight / 2 -
                window.innerHeight / 2,
            left: 0,
            behavior: 'smooth',
        });
    };

    createRef = (view: IView) => (ref: HTMLDivElement): void => {
        this.boxes.set(view, ref);
    };

    render() {
        return (
            <div>
                <Background />
                <Navbar views={views} createHandler={this.createHandler} />
                <Pages
                    views={views}
                    createHandler={this.createHandler}
                    createRef={this.createRef}
                />
            </div>
        );
    }
}

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.paralaxColor};
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url('https://images.pexels.com/photos/34676/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    filter: blur(3px) grayscale(100%);
    transform: scale(1.1);
`;

export default App;
