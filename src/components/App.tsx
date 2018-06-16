import * as React from 'react';
import styled from 'styled-components';
import Navbar from '@components/Navbar';
import View from '@components/View';

interface AppProps {
    message: string;
}

const Box = styled.div``;

class App extends React.Component<AppProps, any> {
    boxes: any[];
    constructor(props: AppProps) {
        super(props);
        this.boxes = [];
    }

    handleClick = (boxIndex: number) => (): void => {
        window.scrollTo({
            top: this.boxes[boxIndex].offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };

    createRef = (index: number) => (ref: any) => {
        this.boxes[index] = ref;
    };

    render() {
        const pageNames = ['First View', 'Second View', 'Last View'];
        const indices = [...pageNames.keys()];

        const views = indices.map(index => {
            const last = index === indices.length - 1;
            const click = last
                ? this.handleClick(0)
                : this.handleClick(index + 1);
            return (
                <View
                    color={randomRGB()}
                    innerRef={this.createRef(index)}
                    handleClick={click}
                    key={String(index)}
                    last={last}
                />
            );
        });

        const handlers = indices.map(index => {
            return this.handleClick(index);
        });

        return (
            <div>
                <Navbar pageNames={pageNames} handlers={handlers} />
                {views}
            </div>
        );
    }
}

const randomRGB = () => {
    const color = () => Math.floor(256 * Math.random());
    return `rgb(${color()}, ${color()}, ${color()})`;
};

export default App;
