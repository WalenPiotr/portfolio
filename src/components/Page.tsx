import { dimensions } from '@constants/dimensions';
import theme from '@constants/theme';
import * as React from 'react';
import styled from 'styled-components';
import Icon from '@icons/index';
import media from '@constants/media';
interface IBox {
    label: string;
}

const Box = styled.div`
    padding-top: 8vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    background-color: ${theme.backgroundColor};
    border-bottom: 1px solid ${theme.fontPrimaryColor};
    border-top: 1px solid ${theme.fontPrimaryColor};
`;

const ButtonWrapper = styled.div`
    position: relative;
    top: 8vh;
    width: 100%;
    height: 8vh;
    text-align: center;
`;

const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    color: ${theme.fontPrimaryColor};
    border: none;
    z-index: 9;
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${theme.fontHighlightColor};
    }
`;

const TextWrapper = styled.div`
    width: 100%;
    text-transform: lowercase;
    margin-bottom: 1vh;
    font-size: 2vh;
`;

const IconWrapper = styled.div`
    margin-bottom: -0.5vh;
    width: 4vh;
    height: 4vh;
`;

interface IPage {
    handleClick: () => void;
    innerRef: any;
    last: boolean;
    innerComponent: JSX.Element;
    label: string;
}

const ButtonGroup = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Background = styled.div`
    z-index: -1;
    width: 100vw;
    height: 30vh;
    top: 0;
    left: 0;
    background-color: ${theme.paralaxColor};
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url('https://images.pexels.com/photos/34676/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
`;

const Page = ({
    handleClick,
    innerRef,
    last,
    innerComponent,
    label,
}: IPage) => (
    <div>
        <Background />
        <Box innerRef={innerRef}>
            {innerComponent}
            <ButtonWrapper>
                <Button onClick={handleClick}>
                    {last ? (
                        <ButtonGroup>
                            <IconWrapper>
                                <Icon.navigation.up theme={theme} />
                            </IconWrapper>
                            <TextWrapper>Back to top</TextWrapper>
                        </ButtonGroup>
                    ) : (
                        <ButtonGroup>
                            <IconWrapper>
                                <Icon.navigation.down theme={theme} />
                            </IconWrapper>
                            <TextWrapper>Next</TextWrapper>
                        </ButtonGroup>
                    )}
                </Button>
            </ButtonWrapper>
        </Box>
        {last ? <Background /> : <div />}
    </div>
);

export default Page;
