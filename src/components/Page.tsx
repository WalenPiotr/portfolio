import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { withTheme } from 'styled-components';
import IView from '@typings/IView';
import * as navbar from '@components/Navbar';
import ITheme from '@typings/ITheme';
import { theme } from '@theme';

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
    font-size: 2.5vh;
    width: 100%;
    text-transform: lowercase;
`;

const IconWrapper = styled.div`
    font-size: 3.5vh;
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
    theme: ITheme;
    label: string;
}

const Page = ({
    handleClick,
    innerRef,
    last,
    innerComponent,
    theme,
    label,
}: IPage) => (
    <Box innerRef={innerRef}>
        <ComponentWrapper navbarHeight={navbar.height}>
            {innerComponent}
        </ComponentWrapper>
        <Button onClick={handleClick}>
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

export default withTheme(Page);
