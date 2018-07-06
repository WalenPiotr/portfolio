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
    height: 35px;
`;

const Credit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 30px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const bumpAnimation = keyframes`
    0% {
        position: relative;
        top: 0px;
    };
    25% {
        position: relative;
        top: -3px;
    };
    50% {
        position: relative;
        top: 0px;
    };
    75% {
        position: relative;
        top: 3px;
    };
    100% {
        position: relative;
        top: 0px;
    };
`;

interface IIconWrapper {
    rotate?: boolean;
    bump?: boolean;
}
const IconWrapper = styled.div`
    width: 25px;
    height: 25px;
    margin: 6px;
    animation: ${({ rotate, bump }: IIconWrapper) => {
        if (rotate) {
            return `${rotate360} 4s infinite linear;`;
        } else if (bump) {
            return `${bumpAnimation} 1s infinite linear`;
        } else {
            return 'none';
        }
    }};
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
