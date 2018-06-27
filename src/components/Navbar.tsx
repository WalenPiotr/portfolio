import * as React from 'react';
import styled from 'styled-components';
import IView from '@typings/IView';

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
    background-color: rgb(220, 220, 220);
    transition: width 0.1s linear;
`;

const Button = styled.button`
    font-family: 'Roboto Condensed';
    height: ${(props: { height: string }) => props.height};
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(220, 220, 220);
    border: none;
    background-color: rgba(0, 0, 0, 0);
    margin-left: 10px;
    &:focus {
        outline: none;
    }
    &:hover {
        color: rgb(250, 250, 250);
    }
    &:hover ${Line} {
        background-color: rgb(250, 250, 250);
    }
`;

interface IPropsNavbar {
    views: IView[];
    createHandler: (view: IView) => any;
    currentPage: number;
}
export const height = '40px';

const Navbar = ({ views, createHandler, currentPage }: IPropsNavbar) => {
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
