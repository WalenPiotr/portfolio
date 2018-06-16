import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const Button = styled.div`
    width: 100px;
    height: 50px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

interface IPageProps {
    color: string;
    handleClick: () => void;
    innerRef: any;
    last: boolean;
}

const View = ({ handleClick, color, innerRef, last }: IPageProps) => (
    <Box color={color} innerRef={innerRef}>
        <Button onClick={handleClick}>{last ? 'Last' : 'Next'}</Button>
    </Box>
);

export default View;
