import ModalCreateUser from './ModalCreateUser'

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage user</div>
      <div className="user-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          table user
          <ModalCreateUser />
        </div>
      </div>
    </div>
  )
}

export default ManageUser
