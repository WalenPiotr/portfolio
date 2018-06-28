import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import IView from '@typings/IView';
import * as navbar from '@components/Navbar';
import ITheme from '@typings/ITheme';

interface IBox {
    index: number;
    theme: ITheme;
}

const Box = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props: IBox) => props.theme.backgroundColor};
    transition: background-color 650ms ease-in;
    display: flex;
    border-bottom: 2px dashed ${(props: IBox) => props.theme.fontPrimaryColor};
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const Button = styled.button`
    font-family: 'Roboto Condensed';
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 10px;
    background-color: rgba(0, 0, 0, 0);
    color: ${({ theme }: { theme: ITheme }) => theme.fontPrimaryColor};
    border: none;
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${({ theme }: { theme: ITheme }) => theme.fontHighlightColor};
    }
`;

const TextWrapper = styled.div`
    font-size: 20px;
    width: 100%;
    text-transform: lowercase;
`;

const IconWrapper = styled.div`
    font-size: 40px;
    width: 100%;
    margin-bottom: -10px;
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
    theme: ITheme;
    index: number;
}

const Page = ({
    handleClick,
    innerRef,
    last,
    innerComponent,
    theme,
    index,
}: IPage) => (
    <Box innerRef={innerRef} index={index} theme={theme}>
        <ComponentWrapper navbarHeight={navbar.height}>
            {innerComponent}
        </ComponentWrapper>
        <Button onClick={handleClick} theme={theme}>
            {last ? (
                <div>
                    <IconWrapper>
                        <FontAwesomeIcon icon="angle-double-up" />
                    </IconWrapper>
                    <TextWrapper>Back to top</TextWrapper>
                </div>
            ) : (
                <div>
                    <IconWrapper>
                        <FontAwesomeIcon icon="angle-down" />
                    </IconWrapper>
                    <TextWrapper>Next</TextWrapper>
                </div>
            )}
        </Button>
    </Box>
);

export default Page;
