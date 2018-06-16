import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: red;
    border: 1px solid black;
    height: 60px;
`;

const Navbar = () => <Box />;

export default Navbar;
