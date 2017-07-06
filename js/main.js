import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
// import reducerTop from './reducers'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// let store = createStore(reducerTop,{rows:[]})


import { AppContainer } from 'react-hot-loader';
import App from '../containers/App';
import AuthExample from '../components/AuthExample';
import style from '../css/main.scss';




const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}
render(App)

if (module.hot) {
  module.hot.accept('../containers/App', () => { 
    const NextApp = require('../containers/App').default;
    render(NextApp) 
  })
}
// if (module.hot) {
//   module.hot.accept('../containers/AuthExample', () => { 
//     const NextApp = require('../components/AuthExample').default;
//     render(NextApp) 
//   })
// }





// ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));
//ReactDOM.render(<App/>,document.getElementById('root'));


// if ('serviceWorker' in navigator) {
//   console.log('CLIENT: service worker registration in progress.');
//   navigator.serviceWorker.register('/sw.js').then(function() {
//     console.log('CLIENT: service worker registration complete.');
//   }, function() {
//     console.log('CLIENT: service worker registration failure.');
//   });
// } else {
//   console.log('CLIENT: service worker is not supported.');
// }