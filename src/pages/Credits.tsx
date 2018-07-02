import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '@constants/theme';
import Icon from '@icons/index';

const Box = styled.div`
    justify-content: center;
    color: ${theme.fontPrimaryColor};
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 32px;
    margin-bottom: 10px;
`;

const Subtitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    height: 45px;
`;

const IconWrapper = styled.div`
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 5px;
    animation: rotate(360deg) infinite linear;
`;

const Credits = () => (
    <Box>
        <Title>Credits</Title>
        <Subtitle>Created with LOVEICON by Piotr Waleń</Subtitle>
        <Subtitle>
            Page powered by React
            <IconWrapper>
                <Icon.technology.react theme={theme} />
            </IconWrapper>
            , Redux
            <IconWrapper>
                <Icon.technology.redux theme={theme} />
            </IconWrapper>
            and Typescript
            <IconWrapper>
                <Icon.technology.ts theme={theme} />
            </IconWrapper>
        </Subtitle>
        <Subtitle>Brand icons are owned by ... companies</Subtitle>
        <Subtitle>
            Navigation icons and love icon are created by FontAwesome
        </Subtitle>
    </Box>
);

export default Credits;
