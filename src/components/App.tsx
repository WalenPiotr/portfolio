import * as React from 'react';
import styled from 'styled-components';
import Navbar from '@components/Navbar';
import Pages from '@components/Pages';


interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
    boxes: Map<string, HTMLDivElement>;
    pageNames = ['First View', 'Second View', 'Last View'];

    constructor(props: AppProps) {
        super(props);
        this.boxes = new Map<string, HTMLDivElement>();
    }

    createHandler = (pageName: string) => (): void => {
        window.scrollTo({
            top: this.boxes.get(pageName).offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };

    createRef = (pageName: string) => (ref: HTMLDivElement): void => {
        this.boxes.set(pageName, ref);
    };

    render() {
        return (
            <div className="App">
                <Navbar
                    pageNames={this.pageNames}
                    createHandler={this.createHandler}
                />
                <Pages
                    pageNames={this.pageNames}
                    createHandler={this.createHandler}
                    createRef={this.createRef}
                />
            </div>
        );
    }
}

export default App;
