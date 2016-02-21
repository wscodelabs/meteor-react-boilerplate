import React, {PropTypes} from 'react';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={clicks:0}
    this.increaseClick=this.increaseClick.bind(this);
  }

  increaseClick(){
      let clicks=this.state.clicks+1
      this.setState({clicks});
  }

  render(){
    return (
      <div>
        <h3>Welcome to Meteor 1.3 with React</h3>
        <span>You Have Clicked {this.state.clicks} times</span>
        <button onClick={this.increaseClick}>Click Me !</button>
      </div>
    )
  }
}

export default Home;