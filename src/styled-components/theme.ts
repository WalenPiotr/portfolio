export interface ITheme {
    fontPrimaryColor: string;
    fontHighlightColor: string;
    backgroundColor: string;
    navbarColor: string;
    buttonColor: string;
    paneColor: string;
    backgroundColors: {
        Skills: string;
        Projects: string;
        Home: string;
        Credits: string;
    };
}
const theme = {
    fontPrimaryColor: 'rgb(220, 220, 220)',
    fontHighlightColor: 'rgb(255, 255, 255)',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    navbarColor: 'rgb(20, 20, 20)',
    buttonColor: 'rgba(0, 0, 0, 0.0)',
    paneColor: 'rgb(255, 255, 255, 0.15)',
    backgroundColors: {
        Skills: 'rgb(255, 0, 0, 0.15)',
        Projects: 'rgb(0, 255, 0, 0.15)',
        Home: 'rgb(125, 125, 0, 0.15)',
        Credits: 'rgb(0, 0, 255, 0.15)',
    },
};

export default theme;
