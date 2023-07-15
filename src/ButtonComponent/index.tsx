import * as React from 'react';

interface State {
  count: number;
}

interface Props {}

export class Button extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log('constructor');
  }

  incrementCounter = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  render() {
    console.log('render');
    return (
      <>
        <h1>Life Cycles</h1>
        <button onClick={this.incrementCounter}>{this.state.count}</button>
      </>
    );
  }
}
