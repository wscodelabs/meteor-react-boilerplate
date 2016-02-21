import React, {PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import sampleDataContainer from './sampleDataContainer.jsx'
injectTapEventPlugin();

export default Layout = ({content}) => {
  return <div className="wrapper">
    {content()}

  </div>
}

