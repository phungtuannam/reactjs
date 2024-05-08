import { useState } from 'react'
import './Login.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="login-container">
      <div className="header">
        <p>Don't have an account yet?</p>
      </div>
      <div className="title">
        <h3 className="text-center ">Typeform</h3>
      </div>
      <div className="content">
        <p className="text-center">Hello, who’s this?</p>
      </div>
      <div className="login-form col-4 mx-auto">
        <form className="form-group">
          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <span>Forgot password?</span>
          <div>
            <button className="login-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
