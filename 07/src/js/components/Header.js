import React from 'react'

export default class ComponentHeader extends React.Component{

  componentWillMount () {
    console.log('ComponentHeader componentWillMount 组件即将加载')
  }

  componentDidMount () {
    console.log('ComponentHeader componentDidMount 组件加载完毕')
  }

  render () {
    return (
      <header>
        <h1>页头</h1>
      </header>
    )
  }
}