import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    time={0}
    errorCount={0}
    handleClick={() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
