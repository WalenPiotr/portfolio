import * as React from 'react';
import { connect } from 'react-redux';
import * as page from '@actions/page';
import { Dispatch, AnyAction } from 'redux';
import IState from '@typings/IState';
import App, { AppProps } from '@components/App';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentPage: (pageNumber: number) => {
        dispatch(page.setPageIndex(pageNumber));
    },
});

export default connect(
    null,
    mapDispatchToProps,
)((props: AppProps) => <App {...props} />);
