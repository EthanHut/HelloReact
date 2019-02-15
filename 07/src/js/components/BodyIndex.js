import React from 'react'
import BodyChild from './BodyChild'

export default class BodyIndex extends React.Component{
  constructor () {
    super(); // 调用基类的所有的初始化方法
    this.state = {
      username: 'Ethan',
      childValue: 0
    };
  }

  changeUserInfo () {
    this.setState({
      username: 'Ethan Zhu'
    })
  }

  handleChildValue (event) {
    this.setState({
      childValue: event.target.value
    })
  }

  render () {
    return (
      <section>
        <h1>{this.state.username}</h1>
        <p>子组件传来的值: {this.state.childValue}</p>
        <BodyChild handleChildValue={this.handleChildValue.bind(this)}></BodyChild>
        <input type="button" value='按钮' onClick={this.changeUserInfo.bind(this)}/>
      </section>
    )
  }
}