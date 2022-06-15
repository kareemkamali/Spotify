import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
const Button = props => {
    // same button using in all my website
// props for use Button from react-router or htref or simply html button
  if (props.href) {
    return (
      <a
        className={`button`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button`}
        disabled={props.disabled}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
