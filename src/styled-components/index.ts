import * as styledComponents from 'styled-components';
// import  theme, {ITheme } from '@styled-components/theme';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export interface ITheme {
    fontPrimaryColor: string;
    fontHighlightColor: string;
    backgroundColor: string;
    boxShadowColor: string;
    navbarColor: string;
    buttonColor: string;
    paralaxColor: string;
}
const theme = {
    fontPrimaryColor: 'rgb(220, 220, 220)',
    fontHighlightColor: 'rgb(255, 255, 255)',
    boxShadowColor: 'rgb(150,150,150)',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    navbarColor: 'rgb(20, 20, 20)',
    buttonColor: 'rgba(0, 0, 0, 0.0)',
    paralaxColor: 'rgb(30, 30, 30)',
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
