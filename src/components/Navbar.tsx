import * as React from 'react';
import styled from 'styled-components';
import IView from '@typings/IView';
import ITheme from '@typings/ITheme';

const Box = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    height: ${(props: { height: string }) => props.height};
    display: flex;
    align-items: center;
`;

const Line = styled.div`
    width: ${({ current }: { current: boolean }) => (current ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }: { theme: ITheme }) =>
        theme.fontPrimaryColor};
    transition: width 0.1s linear;
`;

const Button = styled.button`
    font-family: 'Roboto Condensed';
    height: ${({ height }: { height: string }) => height};
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }: { theme: ITheme }) => theme.fontPrimaryColor};
    border: none;
    background-color: rgba(0, 0, 0, 0);
    margin-left: 10px;
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${({ theme }: { theme: ITheme }) => theme.fontHighlightColor};
    }
    &:hover ${Line} {
        background-color: ${({ theme }: { theme: ITheme }) =>
            theme.fontHighlightColor};
    }
`;

interface IPropsNavbar {
    views: IView[];
    createHandler: (view: IView) => any;
    currentPage: number;
    theme: ITheme;
}
export const height = '40px';

const Navbar = ({ views, createHandler, currentPage, theme }: IPropsNavbar) => {
    const Links = views.map((view, index) => {
        return (
            <Button
                height={height}
                key={view.name}
                onClick={createHandler(view)}
                theme={theme}
            >
                <Line current={currentPage == index} theme={theme} />
                <span>{view.name}</span>
            </Button>
        );
    });
    return <Box height={height}>{Links}</Box>;
};

export default Navbar;
