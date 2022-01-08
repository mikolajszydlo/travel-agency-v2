import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption name = {'Text form'} type = {'text'} />)
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component.isEmptyRender()).toEqual(true);
  });

  it('should render correct title', () => {
    const correctTitle = 'title';
    const component = shallow(<OrderOption name = {correctTitle} type = {'text'}/>);
    expect(component.find('.title').text()).toEqual(correctTitle);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
  };

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type = {type}
          setOrderOption = {mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });
  
    /* common tests */
    it(`render ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });
    
    /* type-specific tests */
    // eslint-disable-next-line default-case
    switch (type) {
      case 'dropdown': {
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);
          
          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });

        break;
      }

      case 'icons': {
        it('contains div with class icons and icon', () => {
          const optionContainer = renderedSubcomponent.find('div.icons');
          expect(optionContainer.length).toBe(1);

          const emptyIconOption = optionContainer.find('div.none');
          expect(emptyIconOption.length).toBe(1);

          const iconsOptions = optionContainer.find('div.icon');
          const iconActive = optionContainer.find('div.active');
          expect(iconsOptions.length).toBe(mockProps.values.length);
          expect(iconActive.length).toBe(1);
          expect(iconsOptions.at(0).props().children[1]).toBe(mockProps.values[0].name);
          expect(iconsOptions.at(1).props().children[1]).toBe(mockProps.values[1].name);

        });

        it('should run setOrderOption function on click', () => {
          const optionContainer = renderedSubcomponent.find('div.icons')
          const iconsOptions = optionContainer.find('div.icon');
          (iconsOptions.at(1)).simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(2);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });

        break;
      }

      case 'checkboxes': {
        
        it('contains div with class checkboxes and labels with input', () => {
          const optionContainer = renderedSubcomponent.find('div.checkboxes');
          expect(optionContainer.length).toBe(1);

          const checkboxOptions = optionContainer.find('input[type="checkbox"]');
          expect(checkboxOptions.length).toBe(mockProps.values.length);
          expect(checkboxOptions.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(checkboxOptions.at(1).prop('value')).toBe(mockProps.values[1].id);
        }); 

        it('should run setOrderOption function on checkbox change', () => {
          renderedSubcomponent.find(`input[value="${testValue}"]`).simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue] });
        });
        break;
      }

      case 'number': {
        it('contains div with class number and input', () => {
          const optionContainer = renderedSubcomponent.find('.number');
          expect(optionContainer.length).toBe(1);

          const input = optionContainer.find('input[type="number"]');
          expect(input.length).toBe(1);
          expect(input.prop('value')).toBe(mockPropsForType.number.currentValue);

        }); 
        
        it('should run setOrderOption function on number change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });

        break;
      }

      case 'text': {
        it('contains input with type text', () => {
          const optionContainer = renderedSubcomponent.find('input[type="text"]');
          expect(optionContainer.length).toBe(1);
        });  

        it('should run setOrderOption function on text change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        
        break;
      }

      case 'date': {
        it('contains div with class date', () => {
          const optionContainer = renderedSubcomponent.find('.date');
          expect(optionContainer.length).toBe(1);
        }); 

        it('should run setOrderOption function on date change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
    }
  });
};