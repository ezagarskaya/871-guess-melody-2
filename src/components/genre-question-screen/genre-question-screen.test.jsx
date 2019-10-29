import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import mocks from '../../mocks/questions.js';

it(`GenreQuestionScreen correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<GenreQuestionScreen
    questions= {{answers: mocks.questions}}
    screenIndex={0}
    onAnswer = {() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
