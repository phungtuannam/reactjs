import React, { useState } from 'react'
import './DisplayInfo.scss'

// class DisplayInfo extends React.Component {
//   render() {
//     console.log('call me render')
//     const { listUsers } = this.props
//     return (
//       <div className="display-info-container">
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               // console.log(user)
//               return (
//                 <div key={user.id} className={user.age > 18 ? 'green' : 'red'}>
//                   <div>My name is {user.name} </div>
//                   <div>I'm {user.age} years old</div>
//                   <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                     Delete
//                   </button>
//                   <hr />
//                 </div>
//               )
//             })}
//           </>
//         )}
//       </div>
//     )
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props
  const [isShowHideListUser, setIsShowHideListUser] = useState(true)

  const handleShowHideListUser = () => {
    setIsShowHideListUser(!isShowHideListUser)
  }

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
