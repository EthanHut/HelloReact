import React from 'react'

export default class BodyChild extends React.Component{
  constructor () {
    super(); // 调用基类的所有的初始化方法
    this.state = {
    };
  }

  render () {
    return (
      <div>
        <p>子组件输入:</p>
        <input type="text" onChange={this.props.handleChildValue}/>
      </div>
    )
  }
}