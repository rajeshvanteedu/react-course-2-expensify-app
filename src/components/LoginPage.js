import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = (props) => (
    <div>
        <button onClick = {() =>{
            props.dispatch(startLogin());
        }}>Login</button>
    </div>    
);


    // const mapDispatchToProps = (dispatch) => ({
    //    startLogin: () => dispatch(startLogin())
    // });

//    const mapDispatchToProps = (dispatch) => {
//     return { dispatch, startLogin: () => dispatch(startLogin()) };
//  };

 // export default connect(undefined, mapDispatchToProps )(LoginPage);

export default connect()(LoginPage);