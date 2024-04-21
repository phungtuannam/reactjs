// class component
// function component
import React from 'react'
import AddUserInfo from './AddUserInfo'
import DisplayInfo from './DisplayInfo'

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: 'Nam', age: 16 },
      { id: 2, name: 'namphung', age: 21 },
      { id: 3, name: 'namms10', age: 30 },
    ],
  }

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [...this.state.listUsers, userObj],
    })
  }

  render() {
    // DRY DON'T REPEAT YOURSELF
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    )
  }
}

export default MyComponent
