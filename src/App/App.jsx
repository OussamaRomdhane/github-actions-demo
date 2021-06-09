import React, { useState } from "react";

import PropTypes from "prop-types";

import toCn from "../utils/to-cn";

import "./App.scss";

export const DEFAULT_MARQUEE = ["Hey!", "Ho!", "Let's go!"];

const App = ({ marquee = DEFAULT_MARQUEE }) => {
  const [title, setTitle] = useState(marquee[0]);

  const onButtonClicked = () => {
    const currentIndex = marquee.indexOf(title);
    const nextIndex = currentIndex < marquee.length - 1 ? currentIndex + 1 : 0;
    setTitle(marquee[nextIndex]);
  };

  return (
    <>
      <h1 className={toCn(title)} role="banner">
        {title}
      </h1>
      <button role="button" onClick={onButtonClicked}>
        Click me!
      </button>
    </>
  );
};

App.propTypes = {
  marquee: PropTypes.arrayOf(PropTypes.string),
};

export default App;
