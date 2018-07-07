import { css } from 'styled-components';

const range = (width: number) => (
    rule: TemplateStringsArray,
    ...args: TemplateStringsArray[]
) => css`
    @media (max-width: ${`${width}px`}) {
        ${css(rule, ...args)};
    }
`;

const media = {
    sm: range(576),
    md: range(768),
    lg: range(992),
    xl: range(1200),
};

export default media;
