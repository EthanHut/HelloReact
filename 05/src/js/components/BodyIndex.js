import React from 'react'

export default class BodyIndex extends React.Component{

  componentWillMount () {
    console.log('BodyIndex componentWillMount 组件即将加载')
  }

  componentDidMount () {
    console.log('BodyIndex componentDidMount 组件加载完毕')
  }

  render () {
    return (
      <section>
        <h1>内容</h1>
      </section>
    )
  }
}