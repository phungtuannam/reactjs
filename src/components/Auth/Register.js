import { useState } from 'react'
import './Register.scss'
import { FaEyeSlash } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { postRegister } from '../../services/apiService'
import { toast } from 'react-toastify'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUserName] = useState('')
  const [isShowPassword, setisShowPassword] = useState(false)

  const navigate = useNavigate('')

  const handleShowPassword = () => {
    setisShowPassword(!isShowPassword)
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleRegister = async () => {
    // validate
    const isValidateEmail = validateEmail(email)
    if (!isValidateEmail) {
      toast.error('Invalid email')
      return
    }

    if (!password) {
      toast.error('Invalid Password')
      return
    }

    let data = await postRegister(email, password, username)
    if (data && data.EC === 0) {
      toast.success(data.EM)
      navigate('/login')
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM)
    }
  }

  return (
    <div className="register-container">
      <div className="header">
        <span>Already have an accout?</span>
        <button onClick={() => navigate('/login')}>Log in</button>
      </div>
      <div className="title">
        <h4>Typeform</h4>
      </div>
      <div className="content">
        <p>Start your journey?</p>
      </div>
      <div className="contact-form col-4 mx-auto">
        <label className="form-label">Email (*)</label>
        <input
          type="email"
          className="form-control"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <div className="form-pasword">
          <label className="form-label">Password (*)</label>
          <input
            type={isShowPassword ? 'text' : 'password'}
            className="form-control"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <span className="eyes" onClick={() => handleShowPassword()}>
            {isShowPassword ? <IoEyeSharp /> : <FaEyeSlash />}
          </span>
        </div>
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setUserName(event.target.value)}
          value={username}
        />
        <button onClick={() => handleRegister()}>Create my free account</button>
        <div>
          <span onClick={() => navigate('/')}>Go to HomePage</span>
        </div>
      </div>
    </div>
  )
}

export default Register
