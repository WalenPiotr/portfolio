import * as React from 'react';
import Icon from '@icons/index';
import { dimensions } from '@styled-components/dimensions';
import styled from '@styled-components/index';
import media from '@styled-components/media';
interface IBox {
    label: string;
}

const Box = styled.div`
    background-color: rgba(0, 0, 0, 0);
    background-color: ${props => props.theme.backgroundColor};
    border-bottom: 1px solid ${props => props.theme.fontPrimaryColor};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const ComponentWrapper = styled.div`
    padding-top: ${dimensions.navbar.height};
    width: 100vw;
    flex-grow: 1;
    display: flex;
    justify-content: center;
`;
const ButtonWrapper = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    color: ${props => props.theme.fontPrimaryColor};
    border: none;
    z-index: 9;
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${props => props.theme.fontHighlightColor};
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
    <div>
        <Box innerRef={innerRef}>
            <ComponentWrapper>{innerComponent}</ComponentWrapper>
            <ButtonWrapper>
                <Button onClick={handleClick}>
                    {last ? (
                        <ButtonGroup>
                            <IconWrapper>
                                <Icon.navigation.up />
                            </IconWrapper>
                            <TextWrapper>Back to top</TextWrapper>
                        </ButtonGroup>
                    ) : (
                        <ButtonGroup>
                            <IconWrapper>
                                <Icon.navigation.down />
                            </IconWrapper>
                            <TextWrapper>Next</TextWrapper>
                        </ButtonGroup>
                    )}
                </Button>
            </ButtonWrapper>
        </Box>
    </div>
);

export default Page;
