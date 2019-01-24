import React from 'react';
import PropTypes from 'prop-types'

import Login from '../../components/Login';

class LoginContainer extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <Login {...this.props} />
        )
    }
}

LoginContainer.propTypes = { }

export default LoginContainer;