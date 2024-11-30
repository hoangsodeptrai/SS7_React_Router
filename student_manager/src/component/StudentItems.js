import React from 'react'

function StudentsItems(props){
    const {id,name,address} = props.s;
    return(
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
      </tr>
    );
}
export default StudentsItems;