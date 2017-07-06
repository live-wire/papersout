import React from 'react';
import ReactDOM from 'react-dom';

var Loader = require('./Loader').default;

const FakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    Loader.showLoader();
    setTimeout(function(){
    	Loader.hideLoader();
    	cb();
    }, 1000) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    Loader.showLoader();
    setTimeout(function(){
    	Loader.hideLoader();
    	cb();
    }, 1000) // fake async
  }
};

export default FakeAuth;