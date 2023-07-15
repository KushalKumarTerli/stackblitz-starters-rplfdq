import * as React from 'react';

interface State {
  count: number;
}

interface Props {
  appCount: number;
}

export class Button extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log('constructor');
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.appCount === 1) {
      console.log(
        'componentDidUpdate',
        prevProps,
        '->previous props:',
        prevProps
      );
    }
    if (this.props.appCount === 1) {
      console.log(
        'componentDidUpdate',

        '->current props:',
        this.props
      );
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    if ([5, 6, 7].includes(nextProps.appCount)) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log('render');
    return (
      <>
        <h1>Life Cycles</h1>
        <button onClick={this.incrementCounter}>{this.props.appCount}</button>
        <span>
          {' '}
          "Button component prop appcount value: "{this.props.appCount} stops
          re-rendering at 5,6,7.
        </span>
      </>
    );
  }
}
