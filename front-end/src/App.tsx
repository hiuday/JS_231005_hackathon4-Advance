import React, { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./ultis/DBultis";

function App() {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [studentData, setStudentData] = useState<any[]>([]);

  const handleOpenModal = () => {
    setOpenDetail(true);
  };
  const handleEdit = () => {
    setOpenEdit(true);
  };
  useEffect(() => {
    const data = async () => {
      const studentData = await getData("/students");
    };
    setStudentData(studentData);
  }, []);
  return (
    <div className="App">
      <>
        <header>
          <div className="Add-list">
            <button
              onClick={() => {
                handleOpenModal();
              }}
            >
              Add học sinh
            </button>
          </div>
          <div className="title-list">
            <h1>Studen list</h1>
          </div>
        </header>
        {/* {openDetail ? <Modal /> : null} */}
        <main>
          <table className="table-list">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Desciton</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>hiu</td>
              <td>ta là trùm trường</td>
              <td>
                <button
                  onClick={() => {
                    handleEdit();
                  }}
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "none",
                    outline: "none",
                    background: "blue",
                    color: "white",
                  }}
                >
                  edit
                </button>
                <button
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "none",
                    outline: "none",
                    background: "red",
                    color: "white",
                  }}
                >
                  xoá
                </button>
              </td>
            </tr>
          </table>
        </main>
        {openDetail ? (
          <div className="modal">
            <div className="modal-style">
              <button
                onClick={() => {
                  setOpenDetail(false);
                }}
                style={{
                  padding: "10px",
                  outline: "none",
                  border: "none",
                  color: "black",
                  background: "white",
                  position: "absolute",
                  top: "10",
                  right: "550px",
                }}
              >
                x
              </button>
              <p>Tạo thêm học sinh</p>
              <form
                style={{
                  margin: "50px 0",
                }}
              >
                <fieldset>
                  <legend>Tên</legend>
                  <input
                    style={{
                      padding: "10px 20px",
                      width: "100%",
                      border: "none",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="điền tên"
                  />
                </fieldset>
                <p>mô tả</p>
                <textarea id="" cols={30} rows={0}></textarea>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <button
                    style={{
                      margin: "30px 0",
                      padding: "10px 30px",
                      background: "green",
                      border: "none",
                      color: "white",
                      borderRadius: "10px",
                      outline: "none",
                    }}
                  >
                    Tạo học sinh
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </>
    </div>
  );
}

export default App;
