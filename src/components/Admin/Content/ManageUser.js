import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState, useEffect } from 'react'
import TableUser from './TableUser'
import { getAllUser } from '../../../services/apiService'

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false)
  const [listUsers, setListUsers] = useState([])

  const fetchListUsers = async () => {
    let res = await getAllUser()
    if (res.EC === 0) {
      setListUsers(res.DT)
    }
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
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  )
}

export default ManageUser
