import React from 'react'
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
  console.log('call me render')
  const { listUsers } = props
  return (
    <div className="display-info-container">
      {true && (
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
