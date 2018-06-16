import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: red;
    border: 1px solid black;
    height: 60px;
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    width: 120px;
    height: 40px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0);
    margin-left: 10px;
`;

interface IPropsNavbar {
    pageNames: string[];
    createHandler: (pageName: string) => any;
}

const Navbar = ({ pageNames, createHandler }: IPropsNavbar) => {
    const buttons = pageNames.map((name, index) => (
        <Button key={name} onClick={createHandler(name)}>
            {name}
        </Button>
    ));
    return <Box>{buttons}</Box>;
};

export default Navbar;
