
// getting rid of react-meteor-data mixins
// thanks to react-komposer :)

import {composeWithTracker} from 'react-komposer'
import SampleData from './sampleData.jsx'
let sampleDataComposer=(props,onData)=>{

  console.log(Meteor.userId());
  onData(null,{sessionData:Session.get('sessionData')});

};

// when you call this container it automatically re runs if the reactive data is changed

export default composeWithTracker(sampleDataComposer)(SampleData);