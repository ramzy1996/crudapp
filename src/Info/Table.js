import React from "react";
import "../App.css";

class Table extends React.Component {
//   constructor() {
//     super();
//   }
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.getData.length > 0 ? (
            this.props.getData.map((e) => (
              <tr key={e._id}>
                <td>{e.Name}</td>
                <td>{e.Age}</td>
                <td>{e.City}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => {this.props.setData(e)}}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => {this.props.del(e)}}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default Table;
