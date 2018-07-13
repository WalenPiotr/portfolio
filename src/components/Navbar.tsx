import { dimensions } from '@constants/dimensions';
import theme from '@constants/theme';
import IView from '@typings/IView';
import * as React from 'react';
import styled from 'styled-components';
import media from '@constants/media';
import Icon from '@icons/index';

const Box = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    background-color: ${theme.navbarColor};
    ${media.md`
        flex-direction: row;
        padding-left: 2vh;
    `};
    /* border-bottom: 1px solid ${theme.fontPrimaryColor}; */
`;

const Line = styled.div`
    width: ${({ current }: { current: boolean }) => (current ? '100%' : '0')};
    transition: width 0.1s linear;
    border-bottom: 1px solid ${theme.fontPrimaryColor};
`;

interface ButtonProps {
    height: string;
    hidden: boolean;
    current: boolean;
}

const Button = styled.button`
    font-family: 'Roboto Condensed';
    height: ${dimensions.navbar.height};
    font-size: 4vh;
    display: ${({ hidden }: ButtonProps) => (hidden ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.fontPrimaryColor};
    border: none;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0);
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${theme.fontHighlightColor};
        background-color: ${({ current }: ButtonProps) =>
            current ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
    }
    background-color: ${({ current }: ButtonProps) =>
        current ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.0)'};
    ${media.md`
        display: flex;
        width: auto;
        font-size:2.5vh;
        height: 4vh;
        margin-right:0;
        margin-left: 1.5vh;
    `};
    border-radius: 2vh;
    padding-left: 1vh;
    padding-right: 1vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
`;

const BarIcon = styled.button`
    ${media.md`
        display: none;
    `};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.fontPrimaryColor};
    background-color: rgba(0, 0, 0, 0);
    border: none;
    width: 100vw;
    height: ${dimensions.navbar.height};
    padding: 0.5vh;
`;

export interface NavbarProps {
    views: IView[];
    createHandler: (view: IView) => any;
    currentPage: number;
}

interface NavbarState {
    hidden: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
    state = {
        hidden: true,
    };

    collapseClick = () => {
        this.setState((prevState: NavbarState) => ({
            ...prevState,
            hidden: !prevState.hidden,
        }));
    };

    navigationClick = (view: IView): any => {
        return () => {
            this.setState((prevState: NavbarState) => ({
                ...prevState,
                hidden: !prevState.hidden,
            }));
            this.props.createHandler(view)();
        };
    };
    render() {
        const Links = this.props.views.map((view, index) => {
            return (
                <Button
                    height={dimensions.navbar.height}
                    key={view.name}
                    onClick={this.navigationClick(view)}
                    hidden={this.state.hidden}
                    current={this.props.currentPage === index}
                >
                    <span>{view.name}</span>
                </Button>
            );
        });
        return (
            <Box>
                <BarIcon onClick={this.collapseClick}>
                    <Icon.other.bars theme={theme} />
                </BarIcon>
                {Links}
            </Box>
        );
    }
}

export default Navbar;
