import { css } from 'styled-components';

export const media = {
    sm: (rule: TemplateStringsArray, ...args: TemplateStringsArray[]) => css`
        @media (max-width: 576px) {
            ${css(rule, ...args)};
        }
    `,
    md: (rule: TemplateStringsArray, ...args: TemplateStringsArray[]) => css`
        @media (max-width: 768px) {
            ${css(rule, ...args)};
        }
    `,
    lg: (rule: TemplateStringsArray, ...args: TemplateStringsArray[]) => css`
        @media (max-width: 992px) {
            ${css(rule, ...args)};
        }
    `,
    xl: (rule: TemplateStringsArray, ...args: TemplateStringsArray[]) => css`
        @media (max-width: 1200px) {
            ${css(rule, ...args)};
        }
    `,
};
