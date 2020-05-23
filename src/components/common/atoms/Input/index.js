import React, {memo} from 'react';
import Style from './Input.module.css';

const Input = memo((props) => (
  <input type="text" className={Style.input} {...props} />
));

export default Input;
