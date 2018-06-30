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
    xs: range(576),
    sm: range(768),
    md: range(992),
    lg: range(1200),
};

export default media;
