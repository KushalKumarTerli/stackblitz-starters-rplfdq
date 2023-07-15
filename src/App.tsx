import * as React from 'react';
import { Button } from './ButtonComponent';
import './style.css';

interface AppProps {
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonClick: () => string;
}

interface State {
  count: number;
}

class App extends React.Component<AppProps, State> {
  heading: string;
  paragraph: string;
  constructor(props) {
    super(props);

    let { heading, paragraph } = props;
    this.heading = heading;
    this.paragraph = paragraph;
    this.state = { count: 0 };
  }
  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <h1>{this.heading}</h1>
        {/* <p>{this.paragraph}</p> */}
        {/* <span>{this.state.count}</span> */}
        <button onClick={this.incrementCounter}>{this.state.count}</button>
        <Button key={1} appCount={this.state.count} />
        {/* <Button key={2} /> */}
      </>
    );
  }
}

export default App;
