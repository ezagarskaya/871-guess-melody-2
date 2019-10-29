import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import mocks from '../../mocks/questions.js';

Enzyme.configure({adapter: new Adapter()});

it(`ArtistQuestionScreen is correctly rendered after relaunch`, () => {
  const changeHandler = jest.fn();
  const app = shallow(<ArtistQuestionScreen
    questions= {{answers: mocks.questions}}
    screenIndex={0}
    onAnswer={changeHandler}
  />);

  const changeAnswer = app.find(`.game__artist`);
  changeAnswer.simulate(`change`);

  expect(changeHandler).toHaveBeenCalledTimes(1);
});
