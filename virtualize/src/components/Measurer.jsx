import React from 'react';
import ListContainer from './ListContainer';

class Measurer extends React.PureComponent {
  start = 0;

  constructor(props) {
    super(props);
    this.state = {
      measures: [0],
    }
  }
  onStart = () => {
    this.start = Date.now();
    console.log('Measurer Start');
  }
  onStop = () => {
    const duration = (Date.now() - this.start);
    this.setState((state, props) => ({
      measures: this.state.measures.concat([duration])
    }));
    console.log('Measurer Stop', duration);
  }

  render() {
    const {component: Component, ...rest} = this.props;
    const last = this.state.measures[this.state.measures.length - 1];
    const total = this.state.measures.reduce((sum, num) => sum + num, 0);
    const avg = this.state.measures.length === 1 ? total : total / (this.state.measures.length - 1);
    const max = Math.max(...this.state.measures);

    return (
      <div>
        <div>Last: {last}ms</div>
        <div>Total: {total}ms</div>
        <div>Average: {Math.round(avg)}ms</div>
        <div>Max: {max}ms</div>
        <br/>
        <Component
          onStart={this.onStart}
          onStop={this.onStop}
          {...rest}
        />
      </div>
    )
  }
};

export default Measurer;
