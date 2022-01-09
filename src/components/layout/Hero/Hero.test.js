import React from 'react';
import {shallow} from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('should render without crashing', () => {
    const component = shallow(<Hero titleText = {'Lorem ipsum'} imageSrc = {'image.jpg'}/>);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<Hero />)).toThrow()
  });

  it('should render correct title and image', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText = {expectedTitle} imageSrc = {expectedImage}/>);
    
    const renderTitle = component.find('.title').text();
    expect(renderTitle).toEqual(expectedTitle);
    expect(component.find('.image').prop('src')).toEqual(expectedImage);
  });

  it('renders correct classNames', () => {
    const mockVariants = 'small dummy';
    const component = shallow(<Hero titleText = {'Lorem'} imageSrc = {'image.jpg'} variant = {mockVariants}/>);
    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('component')).toBe(true);
  });

  it('should render HappyHourAd', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);
  
    expect(component.find('HappyHourAd').length).toEqual(1);
  });
});

