import React from 'react'

export default class BodyIndex extends React.Component{
  constructor () {
    super(); // 调用基类的所有的初始化方法
    this.state = {
      username: 'Ethan'
    };
  }

  componentWillMount () {
    console.log('BodyIndex componentWillMount 组件即将加载')
  }

  componentDidMount () {
    console.log('BodyIndex componentDidMount 组件加载完毕')
  }

  render () {

    setTimeout(() => {
      this.setState({username: 'zhujunhui'})
    }, 4000);

    return (
      <section>
        <h1>{this.state.username}</h1>
      </section>
    )
  }
}