// class component
// function component
import React, { useState } from 'react'
import AddUserInfo from './AddUserInfo'
import DisplayInfo from './DisplayInfo'

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: 'Nam', age: 16 },
//       { id: 2, name: 'namphung', age: 21 },
//       { id: 3, name: 'namms10', age: 30 },
//     ],
//   }

//   handleAddNewUser = (userObj) => {
//     this.setState({
//       listUsers: [...this.state.listUsers, userObj],
//     })
//   }

//   handleDeleteUser = (userId) => {
//     let listUserClone = this.state.listUsers
//     listUserClone = listUserClone.filter((item) => item.id !== userId)
//     this.setState({
//       listUsers: listUserClone,
//     })
//     // console.log(listUserClone)
//   }

//   render() {
//     // DRY DON'T REPEAT YOURSELF
//     return (
//       <>
//         <div className="a">
//           <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <DisplayInfo
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     )
//   }
// }

const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: 'Nam', age: 16 },
    { id: 2, name: 'namphung', age: 21 },
    { id: 3, name: 'namms10', age: 30 },
  ])

  const handleAddNewUser = (userObj) => {
    setListUsers([...listUsers, userObj])
  }

  const handleDeleteUser = (userId) => {
    let listUserClone = [...listUsers]
    listUserClone = listUserClone.filter((item) => item.id !== userId)
    setListUsers(listUserClone)
  }

  return (
    <>
      <div className="a">
        <AddUserInfo handleAddNewUser={handleAddNewUser} />
        <br />
        <DisplayInfo
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  )
}

export default MyComponent
