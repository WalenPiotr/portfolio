import * as React from 'react';
import styled from 'styled-components';
import IView from '@typings/IView';

const Box = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    height: 40px;
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    font-family: 'Roboto Condensed';
    height: 40px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    margin-left: 10px;
    &:focus {
        outline: none;
    }
`;

interface IPropsNavbar {
    views: IView[];
    createHandler: (view: IView) => any;
}

const Navbar = ({ views, createHandler }: IPropsNavbar) => {
    console.log(views);
    const Links = views.map((view, index) => (
        <Button key={view.name} onClick={createHandler(view)}>
            {view.name}
        </Button>
    ));
    return <Box>{Links}</Box>;
};

export default Navbar;
