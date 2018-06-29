import * as React from 'react';
import Navbar, { NavbarProps } from '@components/Navbar';
import { connect } from 'react-redux';
import IState from '@typings/IState';

const mapStateToProps = (state: IState) => ({
    currentPage: state.page.current,
});

export default connect(mapStateToProps)((props: NavbarProps) => (
    <Navbar {...props} />
));
