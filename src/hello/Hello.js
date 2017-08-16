
//first thing we want to do is import React and the React Component into our module
import React, { Component } from 'react';
//Next let's create our empty React class and have the module exports the class
//then we have to tell React what we want the module to draw to the page.
//To do this we need to implement a render() method inside class
class Hello extends Component {
  //We want to initialize our component with data, so let's give the component a default state
  //To do this we need to implement constructor which will be called by React when initializing the component.
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Howdy!!'
    };
  }
  render() {
    return (
      //JSX template
      <div className="hello">
        <h1>{this.state.greeting}</h1>
        <h2>{this.props.friend}</h2>
        <p>Congratulations!  You have created your first React component!</p>
      </div>
    );
  }
}
//Set the default value for the friend prop in case the caller doesn't include the attribute in the JSX
Hello.defaultProps = {
  friend: 'Partner!!'
};
export default Hello;
