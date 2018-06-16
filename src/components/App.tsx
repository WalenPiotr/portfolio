import * as React from 'react';
import styled from 'styled-components';
import Navbar from '@components/Navbar';
import Pages from '@components/Pages';

interface AppProps {
    message: string;
}

const Box = styled.div``;

class App extends React.Component<AppProps, any> {
    boxes: Map<string, any>;
    constructor(props: AppProps) {
        super(props);
        this.boxes = new Map<string, any>();
    }

    createHandler = (pageName: string) => (): any => {
        window.scrollTo({
            top: this.boxes.get(pageName).offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };

    createRef = (pageName: string) => (ref: any) => {
        this.boxes.set(pageName, ref);
    };

    render() {
        const pageNames = ['First View', 'Second View', 'Last View'];
        return (
            <div>
                <Navbar
                    pageNames={pageNames}
                    createHandler={this.createHandler}
                />
                <Pages
                    pageNames={pageNames}
                    createHandler={this.createHandler}
                    createRef={this.createRef}
                />
            </div>
        );
    }
}




export default App;
