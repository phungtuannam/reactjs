import React from 'react'
class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    })
  }

  render() {
    const { listUsers } = this.props
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide()
            }}
          >
            {this.state.isShowListUser ? 'Hide list user:' : 'Show list user:'}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              console.log(user)
              return (
                <div key={user.id} className={user.age > 18 ? 'green' : 'red'}>
                  <div>My name is {user.name} </div>
                  <div>I'm {user.age} years old</div>
                  <hr />
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default DisplayInfo
