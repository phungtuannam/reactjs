import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ModalCreateUser = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6">
              <label class="form-label">Username</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Role
              </label>
              <select id="inputState" class="form-select">
                <option selected value="USER">
                  USER
                </option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label>Image</label>
              <input type="file" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalCreateUser
