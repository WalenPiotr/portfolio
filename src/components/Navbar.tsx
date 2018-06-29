import * as React from 'react';
import styled, { keyframes, withTheme } from 'styled-components';
import IView from '@typings/IView';
import { theme } from '@constants/theme';
import { connect } from 'react-redux';

const Box = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    height: ${(props: { height: string }) => props.height};
    display: flex;
`;

const Line = styled.div`
    width: ${({ current }: { current: boolean }) => (current ? '100%' : '0')};
    border-bottom: 2px dashed ${theme.fontPrimaryColor};
    transition: width 0.1s linear;
`;

const Button = styled.button`
    font-family: 'Roboto Condensed';
    height: ${({ height }: { height: string }) => height};
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${theme.fontPrimaryColor};
    border: none;
    background-color: rgba(0, 0, 0, 0);
    margin-left: 1vh;
    margin-top: 1vh;
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${theme.fontHighlightColor};
    }
    &:hover ${Line} {
        border-bottom: 2px dashed ${theme.fontHighlightColor};
    }
`;

export interface NavbarProps {
    views: IView[];
    createHandler: (view: IView) => any;
    currentPage: number;
}
export const height = '5vh';

const Navbar = ({ views, createHandler, currentPage }: NavbarProps) => {
    const Links = views.map((view, index) => {
        return (
            <Button
                height={height}
                key={view.name}
                onClick={createHandler(view)}
            >
                <Line current={currentPage == index} />
                <span>{view.name}</span>
            </Button>
        );
    });
    return <Box height={height}>{Links}</Box>;
};

export default Navbar;
