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
    console.log('>>> Click me my button')
    // console.log('random', Math.floor(Math.random() * 100 + 1))

    // merge class
    this.setState({
      name: 'namms10',
      age: Math.floor(Math.random() * 100 + 1),
    })
  }

  hanldeMouseOver(event) {
    // console.log(event.pageX)
  }

  handleOnChangeInput(event) {
    this.setState({
      name: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        Hi, I'm from {this.state.name} and I'm {this.state.age} years old
        <button
          onClick={(event) => {
            this.handleClick(event)
          }}
        >
          Click me
        </button>
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event)
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event)
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default MyComponent
