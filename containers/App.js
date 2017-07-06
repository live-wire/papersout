import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Login from '../components/Login';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import NoMatch from '../components/NoMatch';

const App=()=>(<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
	<Router>
	    <div style={{width:'100%',height:'100%'}}>
		    <Route path="/login" component={Login}/>
		    <PrivateRoute path="/" component={Dashboard}/>
	    	<Footer/>
	    </div>
  	</Router>
	
  </MuiThemeProvider>
 );
export default App