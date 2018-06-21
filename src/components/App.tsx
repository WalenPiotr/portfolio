import * as React from 'react';
import styled from 'styled-components';
import Navbar from '@components/Navbar';
import Pages from '@components/Pages';
import IView from '@typings/IView';
interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
    boxes: Map<IView, HTMLDivElement>;
    views = [
        { name: 'Home', component: <div>Piotr Waleń - WebDev</div> },
        { name: 'Projects', component: <div>Projects</div> },
        { name: 'Contact', component: <div>Contact</div> },
    ];

    constructor(props: AppProps) {
        super(props);
        this.boxes = new Map<IView, HTMLDivElement>();
    }

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
                <Navbar views={this.views} createHandler={this.createHandler} />
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
