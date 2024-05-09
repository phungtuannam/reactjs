import { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../../services/apiService'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    //validate
    const isValidateEmail = validateEmail(email)
    if (!isValidateEmail) {
      toast.error('Invalid email')
      return
    }

    if (!password) {
      toast.error('Invalid Password')
      return
    }
    //submit form
    let data = await postLogin(email, password)
    if (data && data.EC === 0) {
      toast.success(data.EM)
      navigate('/')
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM)
    }
  }
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button onClick={() => navigate('/register')}>Sign up</button>
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
            <button
              className="login-btn"
              onClick={(event) => handleLogin(event)}
            >
              Login
            </button>
          </div>
          <div className="back mt-2">
            <p
              onClick={() => {
                navigate('/')
              }}
            >
              Back home
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
