import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import renderer from 'react-test-renderer';

import {render} from '@testing-library/react-native';

import MovieModal from '../../component/MovieModal';

describe('Test MovieModal', () => {
  let testRenderer;
  let instance;
  const mockOnChange = jest.fn();
  beforeAll(() => {
    testRenderer = renderer.create(
      <MovieModal
        visible={false}
        onClose={mockOnChange}
        title="test title"
        overview="test overview"
      />,
    );
    instance = testRenderer.root;
  });

  it('matches snapshot', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Test Component render with correct props', () => {
    expect(instance.props.visible).toBeFalsy();
    expect(instance.props.title).toBe('test title');
    expect(instance.props.overview).toBe('test overview');
  });

  it('Test Component render with correct children', () => {
    const textInstances = instance.findAllByType(Text);
    expect(textInstances.length).toBe(2);
    const {getByText} = render(
      <MovieModal
        visible={false}
        onClose={mockOnChange}
        title="test title"
        overview="test overview"
      />,
    );
    expect(getByText('test title')).not.toBeNull();
    expect(getByText('test overview')).not.toBeNull();
  });
});
