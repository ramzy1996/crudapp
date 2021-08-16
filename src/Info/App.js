import React from "react";
import Form from "./Form";
import Table from "./Table";
import axios from "axios";

import "../App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      editData: [],
    };
  }
  create = (data) => {
    if (!data.isEdit) {
      axios.post("http://localhost:5000/info", data).then((res) => {
        this.getAll();
      });
    } else {
      axios.put("http://localhost:5000/info/update", data).then((res) => {
        this.getAll();
      });
    }
    // console.log(data);
  };

  componentDidMount() {
    this.getAll();
  }
  
  getAll() {
    axios.get("http://localhost:5000/info").then((res) => {
      // console.log(res.data);
      this.setState({
        data: res.data,
      });
    });
  }
  update = (data) => {
    this.setState({
      editData: data,
    });
  };
  del = (data) => {
    var option = window.confirm(`Are you want to delete${data.Name} `);
    if (option) {
      axios.delete(`http://localhost:5000/info/del/${data._id}`).then((res) => {
        console.log(res);
        this.getAll();
      });
    }
  };
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <Form myData={this.create} setForm={this.state.editData} />
          </div>
          <div className="col-6">
            <Table
              getData={this.state.data}
              setData={this.update}
              del={this.del}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
