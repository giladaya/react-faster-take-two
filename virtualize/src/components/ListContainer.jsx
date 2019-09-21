import React from 'react';
import List from './List';
import ListV from './ListV';

const INITIAL_ITEMS = 1000;

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [...Array(INITIAL_ITEMS).keys()],
      starsCount: 1,
      isVirtualized: false,
      isListOpen: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('ListContainer will receive props', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const should = (this.state !== nextState);
    console.log('ListContainer should update', should);
    return should;
  }

  componentWillUpdate() {
    console.log('ListContainer will update');
    this.props.onStart && this.props.onStart();
  }

  componentDidUpdate() {
    console.log('ListContainer did update');
    this.props.onStop && this.props.onStop()
  }

  addItems = (count) => {
    console.log('-- Add items clicked --');
    const min = this.state.list.length;
    const newItems = [...Array(count).keys()].map(x => x + min);
    this.setState((state, props) => (
      {
        list: this.state.list.concat(newItems),
      }
    ));
  }
  clearList = () => {
    this.setState((state, props) => (
      {
        list: [],
        starsCount: 1,
      }
    ));
  }
  countInc = (delta) => {
    console.log('-- Counter inc clicked --');
    this.setState((state, props) => (
      {
        starsCount: this.state.starsCount + delta,
      }
    ));
  }

  toggleVirtualized = () => {
    this.setState((state, props) => ({
      isVirtualized: !this.state.isVirtualized,
    }));
  }

  toggleListOpen = () => {
    this.setState((state, props) => ({
      isListOpen: !this.state.isListOpen,
    }));
  }

  renderList = () => {
    return (
      this.state.isVirtualized ?
      <ListV data={this.state.list} starsCount={this.state.starsCount}/> :
      <List data={this.state.list} starsCount={this.state.starsCount}/>
    )
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addItems(1)}>Add 1</button>
        <button onClick={() => this.addItems(100)}>Add 100</button>
        <button onClick={() => this.addItems(1000)}>Add 1000</button>
        <button onClick={() => this.clearList()}>Clear</button>
        <button onClick={() => this.countInc(1)}>Add *</button>
        <span> Total items: {this.state.list.length} </span><br/>
        <input
          type="checkbox"
          checked={this.state.isListOpen}
          onChange={this.toggleListOpen}
        /> Show List
        <br/>
        <input
          type="checkbox"
          checked={this.state.isVirtualized}
          onChange={this.toggleVirtualized}
        /> Use Magic
        {
          this.state.isListOpen && this.renderList()
        }
      </div>
    )
  }
}

export default ListContainer;
