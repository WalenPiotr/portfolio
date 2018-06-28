import * as React from 'react';
import styled from 'styled-components';
import Navbar from '@components/Navbar';
import Pages from '@components/Pages';
import Home from '@components/Home';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import IView from '@typings/IView';
import ITheme from '@typings/ITheme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

interface AppProps {}

interface AppState {
    currentPage: number;
    theme: ITheme;
}

class App extends React.Component<AppProps, AppState> {
    state = {
        currentPage: 0,
        theme: {
            fontPrimaryColor: 'rgb(230, 230, 255)',
            fontHighlightColor: 'rgb(250, 250, 255)',
            pageColors: [
                'rgb(80, 100, 200)',
                'rgb(100, 80, 200)',
                'rgb(100, 100, 200)',
            ],
            backgroundColor: 'rgb(80, 80, 200)',
        },
    };

    constructor(props: AppProps) {
        super(props);
        this.boxes = new Map<IView, HTMLDivElement>();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {
            passive: true,
        });
        const currentPage = Math.round(window.pageYOffset / window.innerHeight);
        this.setState((prevState: AppState) => ({
            ...prevState,
            currentPage,
            theme: {
                ...prevState.theme,
                backgroundColor: prevState.theme.pageColors[currentPage],
            },
        }));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event: Event) => {
        const currentPage = Math.round(window.pageYOffset / window.innerHeight);
        this.setState((prevState: AppState) => ({
            ...prevState,
            currentPage,
            theme: {
                ...prevState.theme,
                backgroundColor: prevState.theme.pageColors[currentPage],
            },
        }));
    };

    boxes: Map<IView, HTMLDivElement>;

    createHandler = (view: IView) => (): void => {
        window.scrollTo({
            top: this.boxes.get(view).offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };

    createRef = (view: IView) => (ref: HTMLDivElement): void => {
        this.boxes.set(view, ref);
    };

    render() {
        const views = [
            { name: 'Home', component: <Home theme={this.state.theme} /> },
            {
                name: 'Skills',
                component: <Skills theme={this.state.theme} />,
            },
            {
                name: 'Projects',
                component: <Projects theme={this.state.theme} />,
            },
        ];

        return (
            <div className="App">
                <Navbar
                    views={views}
                    createHandler={this.createHandler}
                    currentPage={this.state.currentPage}
                    theme={this.state.theme}
                />
                <Pages
                    views={views}
                    createHandler={this.createHandler}
                    createRef={this.createRef}
                    theme={this.state.theme}
                />
            </div>
        );
    }
}

export default App;
