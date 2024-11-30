import React,{useRef} from "react";
import { addStudents } from "../services/StudentServices";
import { useNavigate } from "react-router-dom";

function AddComponent() {
    const navigate = useNavigate();
  const idRef = useRef();
  const nameRef = useRef();
  const addressRef = useRef();

  const hanleAddStudent =(s)=>{
    s.preventDefault();
    addStudents({
        id:idRef.current.value,
        name:nameRef.current.value,
        address:addressRef.current.value
    })
    navigate("/students")
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">ID</label>
        <input
          ref={idRef}
          type="text"
          name="id"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Example input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Name</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Address</label>
        <input
          ref={addressRef}
          type="text"
          name="address"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input"
        />
      </div>
      <button type="submit" onClick={hanleAddStudent} >Submit</button>
    </form>
  );
}
export default AddComponent;
