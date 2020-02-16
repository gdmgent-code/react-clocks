import React from 'react';
import classnames from 'classnames';

import './LED.css';

const LED = ({ isOn = true }) => {
  return (
    <div className={classnames("led", (isOn) ? "led--ison" : "led--isoff")}>
    </div>
  );
};

export default LED;