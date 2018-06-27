import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import IView from '@typings/IView';
import * as navbar from '@components/Navbar';
import ITheme from '@typings/ITheme';

const Box = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(20, 20, 250, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const Button = styled.button`
    font-family: 'Roboto Condensed';
    height: 70px;
    display: flex;
    flex-direction: column;
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
    font-size: 16px;
    width: 100%;
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
}

const Page = ({
    handleClick,
    innerRef,
    last,
    innerComponent,
    theme,
}: IPage) => (
    <Box innerRef={innerRef}>
        <ComponentWrapper navbarHeight={navbar.height}>
            {innerComponent}
        </ComponentWrapper>
        <Button onClick={handleClick} theme={theme}>
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
