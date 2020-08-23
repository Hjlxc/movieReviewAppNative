import 'react-native';
import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import {CheckBox} from 'react-native-elements';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import CheckBoxGroup from '../../component/CheckBoxGroup';

const options = ['a', 'b', 'c'];
const checked = {b: true, c: true};

describe('Test CheckboxGroup', () => {
  let testRenderer;
  let instance;
  const mockOnChange = jest.fn();
  beforeAll(() => {
    testRenderer = renderer.create(
      <CheckBoxGroup
        options={options}
        checked={checked}
        onOptionPress={mockOnChange}
      />,
    );
    instance = testRenderer.root;
  });

  it('matches snapshot', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Test checkBoxGroup render receive correct props', () => {
    expect(instance.props.options).toEqual(options);
    expect(instance.props.checked).toEqual(checked);
  });

  it('Test CheckBoxGroup render the correct children', () => {
    const checkBoxInstances = instance.findAllByType(CheckBox);
    expect(checkBoxInstances.length).toBe(options.length);
    checkBoxInstances.forEach((checkBoxInstance, idx) => {
      expect(checkBoxInstance.props.title).toBe(options[idx]);
      expect(checkBoxInstance.props.checked).toBe(checked[options[idx]]);
    });
  });
});

describe('Test CheckBoxGroup children onlick interactive', () => {
  let rendered;
  const mockOnPress = jest.fn();
  beforeEach(() => {
    rendered = render(
      <CheckBoxGroup
        options={options}
        checked={checked}
        onOptionPress={mockOnPress}
      />,
    );
  });
  afterEach(cleanup);

  it('Test user interactive when press on checkBox', () => {
    options.forEach((option, idx) => {
      const checkBox = rendered.getByTestId(`checkBox-${idx}`);
      fireEvent(checkBox, 'onPress');
      expect(mockOnPress).toBeCalledWith(option);
      expect(mockOnPress).toHaveBeenCalledTimes(idx + 1);
    });
  });
});
