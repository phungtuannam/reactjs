// class component
// function component
import React from 'react'
import UserInfo from './UserInfo'
import DisplayInfo from './DisplayInfo'

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: 'Nam', age: 20 },
      { id: 2, name: 'namphung', age: 21 },
      { id: 3, name: 'namms10', age: 12 },
    ],
  }

  render() {
    // DRY DON'T REPEAT YOURSELF
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    )
  }
}

export default MyComponent
