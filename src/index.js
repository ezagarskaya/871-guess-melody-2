import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import mocks from "./mocks/questions.js";

const init = () => {
  ReactDOM.render(
      <App
        errorCount={mocks.settings.errorCount}
        gameTime={mocks.settings.gameTime}
        questions={mocks.questions}
      />,
      document.querySelector(`#root`)
  );
};

init(mocks);
