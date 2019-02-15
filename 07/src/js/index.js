var React = require('react')
var ReactDOM = require('react-dom')
import ComponentHeader from './components/Header'
import ComponentFooter from './components/Footer'
import BodyIndex from './components/BodyIndex'

class Index extends React.Component {

  componentWillMount () {
    console.log('Index componentWillMount 组件即将加载')
  }

  componentDidMount () {
    console.log('Index componentDidMount 组件加载完毕')
  }

  render () {
    return (
      <div>
        <ComponentHeader/>
        <BodyIndex/>
        <ComponentFooter/>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('example')
)