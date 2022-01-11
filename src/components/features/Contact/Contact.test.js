import React from 'react';
import {shallow} from 'enzyme';
import Contact from './Contact';

const select = {
  period: '.period',
  person: '.person',
  number: '.number',
};

const mockProps = {
  person: 'Person 1',
  phoneNo: '678.243.8455',
};

describe('Component Contact', () => {
  it('should render without crashing', () => {
    const component = shallow(<Contact />);
    expect(component).toBeTruthy();
  });

  it('should render Icon component', () => {
    const component = shallow(<Contact />);
    const iconContainer = component.find('Icon');
    expect(iconContainer.length).toBe(1);
  });

  it('should render period, contact person and contact number container', () => {
    const component = shallow(<Contact />);
    expect(component.exists(select.period)).toEqual(true);
    expect(component.exists(select.number)).toEqual(true);
    expect(component.exists(select.person)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }

  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkPersonAtTime = (time, expectedPerson) => {
  it(`should show correct contact person at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<Contact {...mockProps} />);
    const renderedPerson = component.find(select.person).text();
    expect(renderedPerson).toEqual(expectedPerson);

    global.Date = trueDate;
  });
};

const checkNumberAtTime = (time, expectedNumber) => {
  it(`should show correct contact phone number at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<Contact {...mockProps} />);
    const renderedNumber = component.find(select.number).text();
    expect(renderedNumber).toEqual(expectedNumber);

    global.Date = trueDate;
  });
};

const checkPeriodAtTime = (time, expectedPeriod) => {
  it(`should show correct time period at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<Contact {...mockProps} />);
    const renderedPeriod = component.find(select.period).text();
    expect(renderedPeriod).toEqual(expectedPeriod);

    global.Date = trueDate;
  });
};

describe('Component Contact with mocked Date', () => {
  checkPersonAtTime('11:57:58', 'Amanda');
  checkNumberAtTime('11:57:58', '678.243.8455');
  checkPeriodAtTime('11:57:58', '8:00 - 12:00');
  checkPersonAtTime('22:57:58', 'The office opens at 8:00 UTC');
  checkNumberAtTime('22:57:58', '');
  checkPeriodAtTime('22:57:58', '');
});