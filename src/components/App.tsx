import Pages from '@components/Pages';
import Navbar from '@containers/Navbar';
import Credits from '@pages/Credits';
import Home from '@pages/Home';
import Projects from '@pages/Projects';
import Skills from '@pages/Skills';
import IView from '@typings/IView';
import * as React from 'react';

const projects = [
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
            ['Source code', 'https://github.com/WalenPiotr/YetAnotherToDoApp'],
            ['Demo page', 'https://todos-typescript.herokuapp.com/'],
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
            ['Source code', 'https://github.com/WalenPiotr/Scrabble-Detector'],
        ]),
    },
    {
        name: 'Rate Car',
        technologies: ['NodeJS', 'Express', 'MongoDB', 'EJS Templates'],
        description:
            'Car review application with server side rendering, user authentication and authorization.',
        links: new Map([
            ['Source code', 'https://github.com/WalenPiotr/Rate-Car'],
            ['Demo page', 'https://rate-car.herokuapp.com/'],
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

export default App;
