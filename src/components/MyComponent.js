// class component
// function component
import React from 'react'

class MyComponent extends React.Component {
  //state
  state = {
    name: 'Nam',
    address: 'HaLong',
    age: 21,
  }

  handleClick(event) {
    console.log('Click me my button')
    // console.log(this.state.name)
  }

  hanldeMouseOver(event) {
    console.log(event.pageX)
  }

  render() {
    return (
      <div>
        Hi, I'm from {this.state.name} and I'm from {this.state.address}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.hanldeMouseOver}>Hover me</button>
      </div>
    )
  }
}

export default MyComponent
