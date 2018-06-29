export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export type SET_CURRENT_PAGE = typeof SET_CURRENT_PAGE;

export function setPageIndex(
    current: number,
): {
    current: number;
    type: SET_CURRENT_PAGE;
} {
    return {
        current,
        type: SET_CURRENT_PAGE,
    };
}
