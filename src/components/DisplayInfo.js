import React from 'react'
import './DisplayInfo.scss'
import logo from './../logo.svg'

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  }

  componentDidMount() {
    console.log('>>> call me component did mount')
    setTimeout(() => {
      document.title = ' test'
    }, 3000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('>>> call me component did update', this.props, prevProps)
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert('me')
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    })
  }

  render() {
    console.log('call me render')
    const { listUsers } = this.props
    return (
      <div className="display-info-container">
        <img src={logo} alt="logo" />
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
          <>
            {listUsers.map((user) => {
              // console.log(user)
              return (
                <div key={user.id} className={user.age > 18 ? 'green' : 'red'}>
                  <div>My name is {user.name} </div>
                  <div>I'm {user.age} years old</div>
                  <button onClick={() => this.props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                  <hr />
                </div>
              )
            })}
          </>
        )}
      </div>
    )
  }
}

export default DisplayInfo
