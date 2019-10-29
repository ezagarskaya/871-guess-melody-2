import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import mocks from '../../mocks/questions.js';

Enzyme.configure({adapter: new Adapter()});

it(`GenreQuestionScreen is correctly rendered after relaunch`, () => {
  const submitHandler = jest.fn();
  const app = shallow(<GenreQuestionScreen
    questions= {{answers: mocks.questions}}
    screenIndex={0}
    onAnswer={submitHandler}
  />);

  const submitAnswer = app.find(`.game__tracks`);
  submitAnswer.simulate(`submit`, {preventDefault: () => {}});

  expect(submitHandler).toHaveBeenCalledTimes(1);
});
