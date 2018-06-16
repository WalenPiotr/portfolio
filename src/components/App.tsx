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

    handleClick = (boxIndex: number) => () => {
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
        const indices = [...new Array(5).keys()];
        const components = indices.map(index => {
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
        return (
            <div>
                <Navbar />
                {components}
            </div>
        );
    }
}

const randomRGB = () => {
    const color = () => Math.floor(256 * Math.random());
    return `rgb(${color()}, ${color()}, ${color()})`;
};

export default App;
