// class component
// function component
import React from 'react'

class MyComponent extends React.Component {
  //state
  state = {
    name: 'Nam',
    address: 'HaLong',
    age: 20,
  }
  render() {
    return (
      <div>
        Hi, I'm from {this.state.name} and I'm from {this.state.address}{' '}
      </div>
    )
  }
}

export default MyComponent
