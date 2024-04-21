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

  handleDeleteUser = (userId) => {
    let listUserClone = this.state.listUsers
    listUserClone = listUserClone.filter((item) => item.id !== userId)
    this.setState({
      listUsers: listUserClone,
    })
    // console.log(listUserClone)
  }

  render() {
    // DRY DON'T REPEAT YOURSELF
    return (
      <>
        <div className="a">
          <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
          <br />
          <DisplayInfo
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    )
  }
}

export default MyComponent
