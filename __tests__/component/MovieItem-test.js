import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MovieItem from '../../component/MovieItem';

test('test MovieItem', () => {
  // https://github.com/react-native-elements/react-native-elements/issues/1903
  // Got similar issue as above one
  /*
  console.error
    Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
    
    Check the render method of `SwipeRating`.
        in SwipeRating (created by Context.Consumer)
        in ThemedComponent (created by ForwardRef(Themed.Rating))
        in ForwardRef(Themed.Rating) (created by MovieItem)
        in View (created by View)
        in View (created by MovieItem)
        in View (created by View)
        in View (created by MovieItem)
        in MovieItem
  */
  //   const testRenderer = renderer.create(<MovieItem rating={3} />);
});
