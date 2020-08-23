import 'react-native';
import React from 'react';
import Popover from 'react-native-popover-view';
import {Text} from 'react-native';

import renderer from 'react-test-renderer';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

import FilterPopover from '../../container/FilterPopover';
const props = {
  title: 'Test Title',
  virticalOffset: 1,
  popoverStyle: {padding: 10},
  resetVisible: false,
};

describe('Test FilterPopover render', () => {
  let testRenderer;
  let instance;
  const mockOnPress = jest.fn();
  beforeAll(() => {
    testRenderer = renderer.create(
      <FilterPopover {...props} onPressReset={mockOnPress}>
        <Text>Test Children</Text>
      </FilterPopover>,
    );
    instance = testRenderer.root;
  });

  it('matches snapshot with reset button', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Test component receive correct props', () => {
    expect(instance.props.title).toBe(props.title);
    expect(instance.props.virticalOffset).toBe(props.virticalOffset);
    expect(instance.props.popoverStyle).toBe(props.popoverStyle);
    expect(instance.props.resetVisible).toBe(props.resetVisible);

    // test the initial state isOpen as it is the props sending to Popover
    expect(instance.findByType(Popover).props.isVisible).toBeFalsy();
  });
});

describe('Test FilterPopover render with correct component', () => {
  let rendered;
  const mockOnPress = jest.fn();
  beforeEach(() => {
    rendered = render(
      <FilterPopover {...props} onPressReset={mockOnPress}>
        <Text>Test Children</Text>
      </FilterPopover>,
    );
  });
  afterEach(cleanup);

  it('Test initial render', () => {
    expect(rendered.getByTestId('trigger-button')).not.toBeNull();

    // popover not open yet
    expect(() => rendered.getByTestId('done-button')).toThrow();
    expect(() => rendered.getByTestId('reset-button')).toThrow();
    expect(() => rendered.getByType(Text)).toThrow();
  });
});
