import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '@constants/theme';
import Icon from '@icons/index';
import media from '@constants/media';

const Box = styled.div`
    justify-content: center;
    color: ${theme.fontPrimaryColor};
    padding: 10px;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;

    font-size: 32px;
    margin-bottom: 10px;
    ${media.md`
        font-size: 16px;
        margin-bottom: 5px;
    `};
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    font-size: 24px;
    margin-top: 10px;
    ${media.md`
        margin-top: 5px;
        font-size: 16px;
    `};
`;

const Credit = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    ${media.md`
        margin-top: 5px;
        font-size: 12px;
    `};
`;

interface IIconWrapper {
    rotate?: boolean;
    bump?: boolean;
}
const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 6px;
    width: 25px;
    height: 25px;
    ${media.md`
        width: 12px;
        height: 12px;
    `};
`;

const Spacer = styled.div`
    height: 20px;
    width: 100%;
`;

const Credits = () => (
    <Box>
        <Title>Credits</Title>
        <Spacer />
        <Subtitle>
            Created with
            <IconWrapper>
                <Icon.other.love theme={theme} />
            </IconWrapper>
            by Piotr Waleń
        </Subtitle>
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
        <Spacer />
        <Credit>Technology icons are owned by adequate companies</Credit>
        <Credit>
            {`Navigation icons, code and love icons are created by FontAwesome - http://fontawesome.com/`}
        </Credit>
        <Credit>
            {`TypeScript icon by Remo H. Jansen - remo.jansen@wolksoftware.com`}
        </Credit>
    </Box>
);

export default Credits;
