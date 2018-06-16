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

const Button = styled.button`
    width: 120px;
    height: 40px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0);
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
        <Button onClick={handleClick}>{last ? 'Back to Top' : 'Next'}</Button>
    </Box>
);

export default View;
