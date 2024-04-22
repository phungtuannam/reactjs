import React, { useEffect, useState } from 'react'
import './DisplayInfo.scss'

const DisplayInfo = (props) => {
  const { listUsers } = props
  const [isShowHideListUser, setIsShowHideListUser] = useState(true)

  const handleShowHideListUser = () => {
    setIsShowHideListUser(!isShowHideListUser)
  }

  console.log('>>> call me render')

  useEffect(() => {
    if (listUsers.length === 0) {
      alert('You deleted all users')
    }
    setTimeout(() => {
      document.title = 'test'
    }, 3000)
    console.log('call me useEffect')
  }, [listUsers])

  return (
    <div className="display-info-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? 'Hide list user:' : 'Show list user:'}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            // console.log(user)
            return (
              <div key={user.id} className={user.age > 18 ? 'green' : 'red'}>
                <div>My name is {user.name} </div>
                <div>I'm {user.age} years old</div>
                <button onClick={() => props.handleDeleteUser(user.id)}>
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

export default DisplayInfo
