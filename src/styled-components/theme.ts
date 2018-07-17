import Color from '@utils/Color';

export interface ITheme {
    fontPrimaryColor: Color;
    fontHighlightColor: Color;
    backgroundColors: {
        main: Color;
        highlight: {
            hover: Color;
            current: Color;
        };
        Navbar: Color;
        Skills: Color;
        Projects: Color;
        Home: Color;
        Credits: Color;
    };
}
const theme: ITheme = {
    fontPrimaryColor: new Color(220, 220, 220),
    fontHighlightColor: new Color(255, 255, 255),
    backgroundColors: {
        Navbar: new Color(20, 20, 20),
        highlight: {
            hover: new Color(255, 255, 255, 0.1),
            current: new Color(255, 255, 255, 0.2),
        },
        main: new Color(0, 0, 0, 0),
        Home: new Color(155, 0, 0, 0.25),
        Skills: new Color(155, 0, 0, 0.25),
        Projects: new Color(155, 0, 0, 0.25),
        Credits: new Color(155, 0, 0, 0.25),
    },
};

export default theme;
