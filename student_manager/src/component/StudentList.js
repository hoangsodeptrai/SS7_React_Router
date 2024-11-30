import React, { useEffect, useRef, useState } from "react";
import getAllStudents from "../services/StudentServices";
import { Link } from "react-router-dom";
import StudentsItems from "./StudentItems";
import AddComponent from "./AddComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { searchName } from "../services/StudentServices";

function StudentList() {
  const [studentsList, setStudentsList] = useState([]);
  useEffect(() => {
    console.log("-----Effect----");
    setStudentsList(getAllStudents());
  }, []);
  const searchNameRef = useRef();
  const handleSearchName = (e) => {
    e.preventDefault();
    let search = searchNameRef.current.value;
    const listSearch = searchName(search);
    setStudentsList(() => [...listSearch]);
  };

  return (
    <>
      <form className="d-flex" role="search">
        <input
          ref={searchNameRef}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button
          onClick={handleSearchName}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
      {console.log("-------render----")}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Address</th>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {studentsList.map((s) => (
            <StudentsItems key={s.id} s={s} />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default StudentList;
