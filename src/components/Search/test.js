import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './index.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Search', () => {
  const props = {
    value: 'test',
    onChange: () => true,
    onSubmit: () => false,
    children: 'Search',
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Search { ...props } />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain the proper children', () => {
    const element = shallow(
      <Search { ...props } />
    );

    expect(element.contains('Search')).toEqual(true);
  });
});

