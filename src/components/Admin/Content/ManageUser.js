import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState, useEffect } from 'react'
import TableUser from './TableUser'
import { getAllUser } from '../../../services/apiService'
import ModalUpdateUser from './ModalUpdateUser'
import ModalViewUser from './ModalViewUser'

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false)
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
  const [showModalViewUser, setShowModalViewUser] = useState(false)

  const [dataUpdate, setDataUpdate] = useState({})
  const [listUsers, setListUsers] = useState([])

  const fetchListUsers = async () => {
    let res = await getAllUser()
    if (res.EC === 0) {
      setListUsers(res.DT)
    }
  }

  const hanldeClickBtn = (user) => {
    // console.log(user)
    setShowModalUpdateUser(true)
    setDataUpdate(user)
  }

  const hanldeClickViewUser = (user) => {
    setShowModalViewUser(true)
    setDataUpdate(user)
  }

  const resetUpdateData = () => {
    setDataUpdate({})
  }

  useEffect(() => {
    fetchListUsers()
  }, [])
  return (
    <div className="manage-user-container">
      <div className="title">Manage user</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus />
            Add new users
          </button>
        </div>
        <div className="table-user-container">
          <TableUser
            listUsers={listUsers}
            hanldeClickBtn={hanldeClickBtn}
            hanldeClickViewUser={hanldeClickViewUser}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataUpdate={dataUpdate}
          resetUpdateData={resetUpdateData}
        />
      </div>
    </div>
  )
}

export default ManageUser
