import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import mocks from '../../mocks/questions.js';

it(`ArtistQuestionScreen correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<ArtistQuestionScreen
    questions= {{answers: mocks.questions}}
    screenIndex={0}
    onAnswer = {() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
