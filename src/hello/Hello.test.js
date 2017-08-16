//First, let's import our libraries for React Hello and the shallow enzyme renderer
//Then, let's set up the Hello World test by adding a suite (describe block)
import React from 'react';
import { shallow } from 'enzyme';

import Hello from './Hello';

describe('Hello World:', function () {
  //components that we'll be testing.
  it('renders without exploding', () => {
     expect(shallow(<Hello />)).toHaveLength(1);
   });

   it('should render with default text', function () {
     const component = shallow(<Hello />);

     expect(component).toIncludeText('Howdy');
     expect(component).toIncludeText('Partner');
   });

   it('should render with our props', function () {
     const component = shallow(
       <Hello friend="Fred"/>
     );

     expect(component).toIncludeText('Howdy');
     expect(component).toIncludeText('Fred');
     expect(component).not.toIncludeText('Partner');
   });

});
// import renderer from 'react-test-renderer';
//
//  it('should render to match the snapshot', function () {
//    const component = renderer.create(
//      <Hello friend="Luke"/>
//    );
//
//    expect(component.toJSON()).toMatchSnapshot();
//  });
// What is happening here? We use the shallow renderer from Enzyme to render the component
// into a sandboxed "document" so that we can perform inquiries. Notice that we are using
// JSX in the shallow() method. Shallow testing is useful to isolate our test by not rendering any child components.

/*What are we testing here?:

We test that the component successfully renders (if you never test anything else, at least test this)
We test that the initial state renders ('Howdy')
We test that default props work ('Partner')
and that passed-in props work ('Fred') */
