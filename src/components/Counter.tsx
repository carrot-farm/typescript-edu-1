import React, {Component} from 'react';

// ==== 인터페이스
// # props 인터페이스
interface CounterProps {
  name: string;
}
// # state 인터페이스
interface CounterState {
  count: number;
}

// ==== 컴포넌트: 인터페이스 미적용
const Counter: React.FC<{ name: string }> = (props) => {
  const { name } = props;
	return <p>{name} counter</p>;
};


// ==== 함수형 컴포넌트: props 인터페이스 적용
const Counter1: React.FC<CounterProps> = (props) => {
  const { name } = props;
  return <p>{name} counter</p>;
};

// ==== 클래스 컴포넌트: props & state 인터페이스 적용
class Counter2 extends  Component<CounterProps, CounterState>{
  constructor(props: CounterProps){
    super(props);
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    setInterval(this.increase, 1000);
  }

  increase = () => {
    const {count} = this.state;
    this.setState({ count: count + 1 });
  }

  render(){
    const { name } = this.props;
    const { count } = this.state;
    return(
      <>
        <h1>{name} counter</h1>
        <div>count value: {count}</div>
      </>
    )
  }
}

export default Counter2;
