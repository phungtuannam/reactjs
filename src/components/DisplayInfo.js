import React from 'react'
class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props
    // const listUsers = this.props.listUsers
    return (
      <div>
        {listUsers.map((user) => {
          console.log(user)
          return (
            <div key={user.id}>
              <div>My name is {user.name} </div>
              <div>I'm {user.age} years old</div>
              <hr />
            </div>
          )
        })}
        {/* <div>My name is {name}</div>
        <div>I'm {age} years old</div>
        <hr />
        <div>My name is {name}</div>
        <div>I'm {age} years old</div>
        <hr />
        <div>My name is {name}</div>
        <div>I'm {age} years old</div> */}
      </div>
    )
  }
}

export default DisplayInfo
