import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(20, 20, 250, 0.8);
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const Button = styled.button`
    height: 40px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    &:focus {
        outline: none;
    }
`;

interface IPage {
    handleClick: () => void;
    innerRef: any;
    last: boolean;
}

const Page = ({ handleClick, innerRef, last }: IPage) => (
    <Box innerRef={innerRef}>
        <Button onClick={handleClick}>{last ? 'Back to Top' : 'Next'}</Button>
    </Box>
);

export default Page;
