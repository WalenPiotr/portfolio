import * as React from 'react';
import styled, { keyframes } from '@styled-components/index';
import Icon from '@icons/index';
import media from '@styled-components/media';

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    margin-right: 8vw;
    margin-left: 8vw;
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
    margin-bottom: 1vh;
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    font-size: 2.5vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
`;

const Credit = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-size: 2vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
`;

interface IIconWrapper {
    rotate?: boolean;
    bump?: boolean;
}
const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5vh;
    width: 2vh;
    height: 2vh;
`;

const Spacer = styled.div`
    height: 2vh;
    width: 100%;
`;

const SmallBox = styled.div``;

const Mail = styled.a`
    color: ${props => props.theme.fontPrimaryColor};
`;

const Technology = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3vh;
    border-radius: 1.5vh;
    padding-left: 1.5vh;
    padding-right: 1vh;
    margin-left: 1vh;
    background-color: ${props => props.theme.paneColor};
`;

const TitleIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1vh;
    margin-right: 1vh;
    width: 3vh;
    height: 3vh;
`;

const LinkIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4vh;
    height: 4vh;
`;

const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.fontPrimaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 0;
    &:hover {
        color: ${props => props.theme.fontHighlightColor};
    }
`;

const Credits = () => (
    <Box>
        <Title>Credits</Title>
        <SmallBox>
            <Main>
                Created with
                <TitleIconWrapper>
                    <Icon.other.love />
                </TitleIconWrapper>
                by Piotr Waleń
            </Main>
            <Spacer />
            <Subtitle>Source code of this page:</Subtitle>
            <Credit>
                <Link href="https://github.com/WalenPiotr/portfolio">
                    <LinkIcon>
                        <Icon.technology.filecode />
                    </LinkIcon>
                    Source code
                </Link>
            </Credit>
            <Subtitle>Page powered by:</Subtitle>
            <Credit>
                <Technology>
                    React
                    <IconWrapper>
                        <Icon.technology.react />
                    </IconWrapper>
                </Technology>
                <Technology>
                    Redux
                    <IconWrapper>
                        <Icon.technology.redux />
                    </IconWrapper>
                </Technology>
                <Technology>
                    Typescript
                    <IconWrapper>
                        <Icon.technology.ts />
                    </IconWrapper>
                </Technology>
            </Credit>
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
