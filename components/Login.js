import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
var FakeAuth = require('./FakeAuth').default;
import {
  Redirect
} from 'react-router-dom';

class Login extends React.Component{
	constructor(props){
		super(props);
	    this.state = {redirectToReferrer: false};
	    this.login = this.login.bind(this);
	}
	login(){
	    FakeAuth.authenticate(() => {
	      this.setState({ redirectToReferrer: true })
	    })
	}

  render() {
  	let forgot=true;
  	const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    let styler = {
		display:'inline-block',
		padding:'20px',
		color:'rgba(255,255,255,0.7)',
		position:'absolute',
		top:'40%',
		left:'50%',
		transform:'translate(-50%,-50%)',
		textAlign:'center',
		width:'100%'
	};
	let btnStyle={
		margin:'0 auto'
	};
	let quotes = [
	"If Facebook was a school, I swear I'd have perfect attendance.",
	"If Monday had a face, I would punch it.",
	"Don't stop when you are tired. Stop when you are done!"
	];
	let quote = quotes[Math.floor(Math.random()*quotes.length)];

  	return (<div style={styler} className="logindiv">
			  <p className="line-1 anim-typewriter">Keep calm and plant a tree! 🌿</p>

			  <TextField
			      hintText="abc@example.com"
			      floatingLabelText="Email"
			    ></TextField><br />
			  <TextField
			      hintText=""
			      floatingLabelText="Password"
			      type="password"
			    ></TextField><br /><br />
			    <RaisedButton label="Let me in" primary={true} onClick={this.login} labelStyle={btnStyle}/><br /><br />
			    {forgot && <div><FlatButton label="forgot password?" labelStyle={{fontSize:'11px'}} secondary={true} /><br /></div>}
			</div>
  		);
  }
}
export default Login