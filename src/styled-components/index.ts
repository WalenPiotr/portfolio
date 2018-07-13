import * as styledComponents from 'styled-components';
import  theme, {ITheme } from '@styled-components/theme';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
