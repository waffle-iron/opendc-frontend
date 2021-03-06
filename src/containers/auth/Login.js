import PropTypes from "prop-types";
import React from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { logIn } from "../../actions/auth";

class LoginContainer extends React.Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
  };

  onAuthResponse(response) {
    this.props.onLogin({
      email: response.getBasicProfile().getEmail(),
      givenName: response.getBasicProfile().getGivenName(),
      familyName: response.getBasicProfile().getFamilyName(),
      googleId: response.googleId,
      authToken: response.getAuthResponse().id_token,
      expiresAt: response.getAuthResponse().expires_at
    });
  }

  render() {
    if (!this.props.visible) {
      return <span />;
    }

    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
        onSuccess={this.onAuthResponse.bind(this)}
        onFailure={this.onAuthResponse.bind(this)}
        className="login btn btn-primary"
      >
        <span className="fa fa-google" /> <span>Login with Google</span>
      </GoogleLogin>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    visible: ownProps.visible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: payload => dispatch(logIn(payload))
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export default Login;
