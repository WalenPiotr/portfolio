import * as React from 'react';
import Page from '@components/Page';
import IView from '@typings/IView';
import ITheme from '@typings/ITheme';

interface IPages {
    views: IView[];
    theme: ITheme;
    createHandler: (view: IView) => () => void;
    createRef: (view: IView) => (ref: HTMLDivElement) => void;
}

const Pages = ({ views, createRef, createHandler, theme }: IPages) => {
    const pages = views.map((view: IView, index: number, array: IView[]) => {
        const last = index === array.length - 1;
        const clickTarget = last ? views[0] : views[index + 1];
        return (
            <Page
                theme={theme}
                index={index}
                innerRef={createRef(view)}
                handleClick={createHandler(clickTarget)}
                key={String(index)}
                last={last}
                innerComponent={view.component}
            />
        );
    });
    return <div>{pages}</div>;
};

export default Pages;
