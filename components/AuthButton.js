import React from 'react';
import {
  withRouter
} from 'react-router-dom';
var FakeAuth = require('./FakeAuth').default;
import RaisedButton from 'material-ui/RaisedButton';


const AuthButton = withRouter(({ history }) => (
  FakeAuth.isAuthenticated ? (
  	<RaisedButton label="Log out" secondary={true} style={{float:'right',color:'#ffffff',marginTop:'10px',marginRight:20}} labelStyle={{color:'#ffffff'}} onClick={() => {
        FakeAuth.signout(() => history.push('/'))
      }} />
  ) : (
    <p style={{display:'none'}}>Signed In</p>
  )
));

export default AuthButton;