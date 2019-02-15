import React from 'react'

export default class ComponentFooter extends React.Component{

  componentWillMount () {
    console.log('ComponentFooter componentWillMount 组件即将加载')
  }

  componentDidMount () {
    console.log('ComponentFooter componentDidMount 组件加载完毕')
  }

  render () {
    return (
      <footer>
        <h1>页尾</h1>
      </footer>
    )
  }
}