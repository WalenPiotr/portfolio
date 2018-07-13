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

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    font-size: 3.5vh;
    margin-top: 1vh;
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    font-size: 2.5vh;
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

const SmallBox = styled.div`
    border-radius: 2vh;
    padding: 1.5vh;
    background-color: rgba(255, 255, 255, 0.15);
`;
const Mail = styled.a`
    color: ${theme.fontPrimaryColor};
`;

const Technology = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    height: 4vh;
    border-radius: 2vh;
    padding: 0.5vh;
    padding-left: 1.5vh;
    padding-right: 1.5vh;
    margin-left: 1vh;
`;

const Credits = () => (
    <Box>
        <Title>Credits</Title>
        <Spacer />
        <SmallBox>
            <Main>
                Created with
                <IconWrapper>
                    <Icon.other.love theme={theme} />
                </IconWrapper>
                by Piotr Waleń
            </Main>
            <Spacer />

            <Subtitle>
                <span>{`Feel free to contact me at: `} </span>
            </Subtitle>
            <Subtitle>
                <Technology>
                    <Mail href="mailto:walen.piotr@gmail.com">{`walen.piotr@gmail.com`}</Mail>
                </Technology>
            </Subtitle>
            <Spacer />

            <Subtitle>Page powered by:</Subtitle>
            <Subtitle>
                <Technology>
                    React
                    <IconWrapper>
                        <Icon.technology.react theme={theme} />
                    </IconWrapper>
                </Technology>
                <Technology>
                    Redux
                    <IconWrapper>
                        <Icon.technology.redux theme={theme} />
                    </IconWrapper>
                </Technology>
                <Technology>
                    Typescript
                    <IconWrapper>
                        <Icon.technology.ts theme={theme} />
                    </IconWrapper>
                </Technology>
            </Subtitle>
            <Spacer />
            <Credit>Technology icons are owned by adequate companies</Credit>
            <Credit>
                {`Navigation icons, code and love icons are created by FontAwesome - http://fontawesome.com/`}
            </Credit>
            <Credit>
                {`TypeScript icon by Remo H. Jansen - remo.jansen@wolksoftware.com`}
            </Credit>
        </SmallBox>
    </Box>
);

export default Credits;
