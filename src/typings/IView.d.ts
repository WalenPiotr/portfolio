import Color from '@utils/Color';
export default interface IView {
    name: string;
    component: JSX.Element;
    backgroundColor: Color;
}
