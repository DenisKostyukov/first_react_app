import {Component} from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  }
  decrement = () => {
    const {counter} = this.state;
    if(counter>0){
      this.setState({counter: counter - 1});
    }
    
  }
  render() {
    return (
      <>
      <h1>{this.state.counter}</h1>
      <button onClick= {this.decrement}>-</button>
      <button onClick= {this.increment}>+</button>
      </>
    )
  }
}
export default Counter