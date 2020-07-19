import React from "react";

function Table(props) {
    return (
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Photo</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src={props.picture} alt={props.name}/></th>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>  
    </tr>
  </tbody>
</table>
);
}

export default Table;