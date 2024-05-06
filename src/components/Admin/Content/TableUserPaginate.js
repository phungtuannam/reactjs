import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'

const TableUserPaginate = (props) => {
  const {
    listUsers,
    hanldeClickBtn,
    hanldeClickBtnDelete,
    pageCount,
    fetchListUsersWithPaginate,
  } = props
  const handlePageClick = (event) => {
    fetchListUsersWithPaginate(event.selected + 1)
    // console.log(`User requested page number ${event.selected}`)
  }

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`TableUserPaginatePaginate ${index}`}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => props.hanldeClickViewUser(item)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => hanldeClickBtn(item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => hanldeClickBtnDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan="4">Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  )
}

export default TableUserPaginate