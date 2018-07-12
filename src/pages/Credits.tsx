import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '@constants/theme';
import Icon from '@icons/index';
import media from '@constants/media';

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    width: 100vw;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    font-size: 4vh;
    margin-bottom: 1vh;
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    font-size: 3vh;
    margin-top: 1vh;
`;

const Credit = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    font-size: 2vh;
    margin-top: 1vh;
`;

interface IIconWrapper {
    rotate?: boolean;
    bump?: boolean;
}
const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1vh;
    width: 3vh;
    height: 3vh;
`;

const Spacer = styled.div`
    height: 2vh;
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
