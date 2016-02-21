import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'
import Home from './components/home.jsx'
FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(Layout, {content: () => <Home />});

  }
});