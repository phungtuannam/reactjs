// class component
// function component
import React from 'react'
import UserInfo from './UserInfo'
import DisplayInfo from './DisplayInfo'

class MyComponent extends React.Component {
  render() {
    const myArr = [1, 'abv', 's', 'd', 'f']

    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfo name="Nam" age="30" />
        <hr />
        <DisplayInfo name={'namms10'} age={10} myArr={myArr} />
      </div>
    )
  }
}

export default MyComponent
