import * as React from 'react';
import styled from 'styled-components';
import Navbar from '@components/Navbar';
import Pages from '@components/Pages';
import Home from '@components/Home';
import IView from '@typings/IView';
import ITheme from '@typings/ITheme';
interface AppProps {}
interface AppState {
    currentPage: number;
}

class App extends React.Component<AppProps, AppState> {
    state = {
        currentPage: 0,
    };
    theme: ITheme = {
        fontPrimaryColor: 'rgb(220, 220, 255)',
        fontHighlightColor: 'rgb(250, 250, 255)',
        backgroundColor: 'rgb(20, 20, 255, 0.8)',
    };
    constructor(props: AppProps) {
        super(props);
        this.boxes = new Map<IView, HTMLDivElement>();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {
            passive: true,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event: Event) => {
        const currentPage = Math.round(window.pageYOffset / window.innerHeight);
        this.setState({ currentPage });
    };

    boxes: Map<IView, HTMLDivElement>;
    views = [
        { name: 'Home', component: <Home theme={this.theme} /> },
        { name: 'Projects', component: <div>Projects</div> },
        { name: 'Contact', component: <div>Contact</div> },
    ];

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
        return (
            <div className="App">
                <Navbar
                    views={this.views}
                    createHandler={this.createHandler}
                    currentPage={this.state.currentPage}
                    theme={this.theme}
                />
                <Pages
                    views={this.views}
                    createHandler={this.createHandler}
                    createRef={this.createRef}
                    theme={this.theme}
                />
            </div>
        );
    }
}

export default App;
