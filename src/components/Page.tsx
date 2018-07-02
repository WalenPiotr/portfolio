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
    width: 100%;
    height: 100vh;
    background-color: ${theme.backgroundColor};
    transition: background-color 500ms ease-in;
    display: flex;
    border-bottom: 2px dashed ${theme.fontPrimaryColor};
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const Button = styled.button`
    font-family: 'Roboto Condensed';
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    color: ${theme.fontPrimaryColor};
    border: none;
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
    font-size: 18px;
    ${media.sm`
        font-size: 12px;
    `};
`;

const IconWrapper = styled.div`
    margin-bottom: -5px;
    width: 100%;

    width: 40px;
    height: 40px;
    ${media.sm`
        width: 30px;
        height: 30px;
    `};
`;

const ComponentWrapper = styled.div`
    width: 100%;
    flex-grow: 1;
    margin-top: ${(props: { navbarHeight: string }) => props.navbarHeight};
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface IPage {
    handleClick: () => void;
    innerRef: any;
    last: boolean;
    innerComponent: JSX.Element;
    label: string;
}

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Page = ({
    handleClick,
    innerRef,
    last,
    innerComponent,
    label,
}: IPage) => (
    <Box innerRef={innerRef}>
        <ComponentWrapper navbarHeight={dimensions.navbar.height}>
            {innerComponent}
        </ComponentWrapper>
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
    </Box>
);

export default Page;
