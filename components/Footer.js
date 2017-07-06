import React from 'react';
import AuthButton from '../components/AuthButton';

const Footer = ()=>{
	return (
			<div style={{position:'absolute',bottom:'0',background:'rgba(0,0,0,0.3)',padding:5,width:'100%'}}>
				<AuthButton />
				<img style={{'height':'50px',cursor:'pointer',float:'left',marginLeft:'10px'}} src="../images/papersout_grey.png"/>
			</div>
	);

};

export default Footer;