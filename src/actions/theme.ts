import ITheme from '@typings/ITheme';

export const LOAD_BACKGROUND = 'LOAD_BACKGROUND';
export type LOAD_BACKGROUND = typeof LOAD_BACKGROUND;

export function loadBackground(
    backgroundColor: string,
): {
    backgroundColor: string;
    type: LOAD_BACKGROUND;
} {
    return {
        backgroundColor,
        type: LOAD_BACKGROUND,
    };
}
