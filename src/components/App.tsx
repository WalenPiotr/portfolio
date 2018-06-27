import * as React from 'react';
import styled from 'styled-components';
import Navbar from '@components/Navbar';
import Pages from '@components/Pages';
import IView from '@typings/IView';
interface AppProps {}
interface AppState {
    currentPage: number;
}

class App extends React.Component<AppProps, AppState> {
    state = {
        currentPage: 0,
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
        { name: 'Home', component: <div>Piotr Waleń - WebDev</div> },
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
                />
                <Pages
                    views={this.views}
                    createHandler={this.createHandler}
                    createRef={this.createRef}
                />
            </div>
        );
    }
}

export default App;
