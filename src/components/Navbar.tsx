import * as React from 'react';
import styled from 'styled-components';

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
    pageNames: string[];
    createHandler: (pageName: string) => any;
}

const Navbar = ({ pageNames, createHandler }: IPropsNavbar) => {
    const Links = pageNames.map((name, index) => (
        <Button key={name} onClick={createHandler(name)}>
            {name}
        </Button>
    ));
    return <Box>{Links}</Box>;
};

export default Navbar;
