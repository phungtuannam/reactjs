import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState, useEffect } from 'react'
// import TableUser from './TableUser'
import { getAllUser, getUserPaginate } from '../../../services/apiService'
import ModalUpdateUser from './ModalUpdateUser'
import ModalViewUser from './ModalViewUser'
import ModalDeleteUser from './ModalDeleteUser'
import TableUserPaginate from './TableUserPaginate'

const ManageUser = () => {
  const [pageCount, setPageCount] = useState(0)
  const LIMIT_USER = 6
  const [currentPage, setCurrentPage] = useState(1)

  const [showModalCreateUser, setShowModalCreateUser] = useState(false)
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
  const [showModalViewUser, setShowModalViewUser] = useState(false)
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)

  const [dataViewUser, setDataViewUser] = useState({})
  const [dataUpdate, setDataUpdate] = useState({})
  const [listUsers, setListUsers] = useState([])
  const [dataDelete, setDataDelete] = useState({})

  const fetchListUsers = async () => {
    let res = await getAllUser()
    if (res.EC === 0) {
      setListUsers(res.DT)
    }
  }

  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserPaginate(page, LIMIT_USER)

    if (res.EC === 0) {
      console.log('res.dt', res.DT)
      setListUsers(res.DT.users)
      setPageCount(res.DT.totalPages)
    }
  }

  const hanldeClickBtn = (user) => {
    setShowModalUpdateUser(true)
    setDataUpdate(user)
  }

  const hanldeClickViewUser = (user) => {
    setShowModalViewUser(true)
    setDataViewUser(user)
  }

  const resetUpdateData = () => {
    setDataUpdate({})
  }

  const hanldeClickBtnDelete = (user) => {
    setShowModalDeleteUser(true)
    setDataDelete(user)
  }

  useEffect(() => {
    // fetchListUsers()
    fetchListUsersWithPaginate(1)
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
          {/* <TableUser
            listUsers={listUsers}
            hanldeClickBtn={hanldeClickBtn}
            hanldeClickViewUser={hanldeClickViewUser}
            hanldeClickBtnDelete={hanldeClickBtnDelete}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            hanldeClickBtn={hanldeClickBtn}
            hanldeClickViewUser={hanldeClickViewUser}
            hanldeClickBtnDelete={hanldeClickBtnDelete}
            pageCount={pageCount}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataViewUser={dataViewUser}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default ManageUser
