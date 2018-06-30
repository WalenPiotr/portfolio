import { dimensions } from '@constants/dimensions';
import { theme } from '@constants/theme';
import * as React from 'react';
import styled from 'styled-components';
import Icon from '@icons/index';
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
    font-size: 2vh;
    width: 100%;
    text-transform: lowercase;
    margin-bottom: 1vh;
`;

const IconWrapper = styled.div`
    font-size: 4vh;
    margin-bottom: -1vh;
    width: 100%;
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
                <div>
                    <IconWrapper>
                        <Icon.navigation.up theme={theme} />
                    </IconWrapper>
                    <TextWrapper>Back to top</TextWrapper>
                </div>
            ) : (
                <div>
                    <IconWrapper>
                        <Icon.navigation.down theme={theme} />
                    </IconWrapper>
                    <TextWrapper>Next</TextWrapper>
                </div>
            )}
        </Button>
    </Box>
);

export default Page;
