import theme from '@constants/theme';
import * as React from 'react';
import styled from 'styled-components';
import media from '@constants/media';
import Icon from '@icons/index';

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${theme.backgroundColor};
    width: 100vw;
`;

const Name = styled.span`
    font-size: 8vh;
`;

const Title = styled.span`
    font-size: 4vh;
`;

const IconsBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SymbolWrapper = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    margin-top: 3vh;
    color: ${theme.fontPrimaryColor};
    text-decoration: none;
`;

const IconWrapper = styled.div`
    width: 5vh;
    height: 5vh;
    margin-right: 1.5vh;
    margin-left: 1.5vh;
`;

const Home = () => (
    <Box>
        <Name>Piotr Waleń</Name>
        <Title>Web Developer</Title>
        <IconsBox>
            <SymbolWrapper href="https://github.com/WalenPiotr">
                <IconWrapper>
                    <Icon.brand.github theme={theme} />
                </IconWrapper>
                Github
            </SymbolWrapper>
            <SymbolWrapper href="https://www.linkedin.com/in/piotr-walen">
                <IconWrapper>
                    <Icon.brand.linkedin theme={theme} />
                </IconWrapper>
                LinkedIn
            </SymbolWrapper>
            <SymbolWrapper href="mailto:walen.piotr@gmail.com">
                <IconWrapper>
                    <Icon.other.mail theme={theme} />
                </IconWrapper>
                Mail
            </SymbolWrapper>
        </IconsBox>
    </Box>
);

export default Home;
