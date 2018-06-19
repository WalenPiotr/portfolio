import * as React from 'react';
import Page from '@components/Page';

interface IPages {
    pageNames: string[];
    createHandler: (pageName: string) => () => void;
    createRef: (pageName: string) => (ref: HTMLDivElement) => void;
}

const Pages = ({ pageNames, createRef, createHandler }: IPages) => {
    const pages = pageNames.map(
        (name: string, index: number, array: string[]) => {
            const last = index === array.length - 1;
            const clickTarget = last ? pageNames[0] : pageNames[index + 1];
            return (
                <Page
                    innerRef={createRef(name)}
                    handleClick={createHandler(clickTarget)}
                    key={String(index)}
                    last={last}
                />
            );
        },
    );
    return <div>{pages}</div>;
};

export default Pages;
