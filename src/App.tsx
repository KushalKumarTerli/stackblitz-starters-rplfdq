import * as React from 'react';
import './style.css';

interface AppProps {
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonClick: () => string;
}

let a = [];

export default function App(props: AppProps) {
  const { heading, paragraph, buttonClick, buttonText } = props;
  const onClickButton = () => {
    buttonClick();
    console.log('clicked button',paragraph);
  };
  return (
    <div>
      <h1>Hello {heading}</h1>
      <p>Start editing to {paragraph}some magic happen{paragraph} :)</p>
      <button onClick={onClickButton}>{buttonText}</button>
    </div>
  );
}

// MainAPP
//   onClickFunction
//     App1 - props=> onClickFunction
//       button
//     App2- props=> onClickFunction
//       button
//     App3- props=> onClickFunction
//       button
