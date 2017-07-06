import React from 'react';
import ReactDOM from 'react-dom';
import CircularProgress from 'material-ui/CircularProgress';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Loader = {
	showLoader(){
	  	ReactDOM.render(
	  		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
	  		<div style={{width:"100%",height:"100%",left:'0px',top:'0px',position:"fixed",zIndex:"9999999",background:"rgba(0,0,0,0.5)"}}>
		    	<CircularProgress size={60} thickness={7} style={{position:'fixed','left':'50%','top':'50%',transform:'translate(-50%,-50%)'}} />
		    </div></MuiThemeProvider>,
		    document.getElementById('progress')
		  );
  	},
	hideLoader(){
		ReactDOM.render(<div></div>,
	    document.getElementById('progress')
	  );
	}

};

export default Loader;