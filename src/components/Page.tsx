import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
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
    font-family: 'Roboto Condensed'; 
    height: 50px;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    &:focus {
        outline: none;
    }
`;

const TextWrapper = styled.div`
    font-size: 12px;
    width: 100%;
`;

const IconWrapper = styled.div`
    font-size: 28px;
    width: 100%;
    margin-bottom: -10px;
`;

interface IPage {
    handleClick: () => void;
    innerRef: any;
    last: boolean;
}

const Page = ({ handleClick, innerRef, last }: IPage) => (
    <Box innerRef={innerRef}>
        <Button onClick={handleClick}>
            {last ? (
                <div>
                    <IconWrapper>
                        <FontAwesome name="angle-double-up" />
                    </IconWrapper>
                    <TextWrapper>Back to top</TextWrapper>
                </div>
            ) : (
                <div>
                    <IconWrapper>
                        <FontAwesome name="angle-down" />
                    </IconWrapper>
                    <TextWrapper>Next</TextWrapper>
                </div>
            )}
        </Button>
    </Box>
);

export default Page;
