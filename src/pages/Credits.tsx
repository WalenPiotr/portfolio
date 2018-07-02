import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '@constants/theme';
import Icon from '@icons/index';

const Box = styled.div`
    justify-content: center;
    color: ${theme.fontPrimaryColor};
`;

const Title = styled.div`
    justify-content: center;
    font-size: 30px;
`;

const Subtitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

const IconWrapper = styled.div`
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 5px;
    animation: rotate(360deg) infinite linear;
`;

const Credits = () => (
    <Box>
        <Title>Credits</Title>
        <Subtitle>
            Page powered by React
            <IconWrapper>
                <Icon.technology.react theme={theme} />
            </IconWrapper>
        </Subtitle>
        <Subtitle>Created with LOVEICON by Piotr Walen</Subtitle>
        <Subtitle>Brand icons are owned by ... companies</Subtitle>
        <Subtitle>
            Navigation icons and love icons are created by FontAwesome
        </Subtitle>
    </Box>
);

export default Credits;
