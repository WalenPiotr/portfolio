import * as React from 'react';
import Icon from '@icons/index';
import { dimensions } from '@styled-components/dimensions';
import styled from '@styled-components/index';
import media from '@styled-components/media';
import Color from '@utils/Color';
interface IBox {
    label: string;
}

const Box = styled.div`
    background-color: rgba(0, 0, 0, 0);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const Filler = styled.div`
    flex-grow: 1;
`;
const ComponentWrapper = styled.div`
    margin-top: ${dimensions.navbar.height};
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: ${(props: { backgroundColor: Color }) =>
        props.backgroundColor.stringify()};
    padding-bottom: 10vh;
    padding-top: 10vh;
    clip-path: polygon(0 0, 0 calc(100% - 10vh), 100% 100%, 100% 10vh);
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
    border: none;
    z-index: 9;

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
    backgroundColor: Color;
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
    backgroundColor,
}: IPage) => (
    <div>
        <Box innerRef={innerRef}>
            <Filler />
            <ComponentWrapper backgroundColor={backgroundColor}>
                {innerComponent}
            </ComponentWrapper>
            <Filler />
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
