import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id = {'abc'} tags = {[]}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should have proper src and alt value', () => {
    const expectedImage = 'image.jpg';
    const expectedAltText = 'description';

    const component = shallow(<TripSummary image = {expectedImage} name = {expectedAltText} tags = {[]} />);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAltText);
  });

  it('should render proper name, cost and days props', () => {
    const expectName = 'name';
    const expectDays = 3;
    const expectCost = '100';

    const component = shallow(<TripSummary name = {expectName} days = {expectDays} cost = {expectCost} tags = {[]} />);
    expect(component.find('.title').text()).toEqual(expectName);
    expect(component.find('.tripDuration').props().children[0]).toEqual(expectDays);
    expect(component.find('.tripCost').props().children[1]).toEqual(expectCost);
  });

  it('should throw errow without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow()
  });

  it('should render tags in proper order', () => {

    const tags = ['abc', 'cde', 'fgh'];
    const component = shallow(<TripSummary tags = {tags}/>)
    console.log(component.debug());

    tags.map(tag => 
      expect(component
        .find('.tag')
        .at(tags.indexOf(tag)).text())
        .toEqual(tag))
  });
});