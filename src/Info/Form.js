import React from "react";
import "../App.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      Name: "",
      Age: "",
      City: "",
      isEdit: false,
    };
  }
  infoChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  componentWillReceiveProps(props) {
    if (props.setForm._id != null) {
      this.setState({
        isEdit: true,
        _id: props.setForm._id,
        Name: props.setForm.Name,
        Age: props.setForm.Age,
        City: props.setForm.City,
      });
    }
  }
  // this.setState({
  //   Name: "",
  //   Age: "",
  //   City: "",
  // });
  infoSubmit = (e) => {
    if (!this.state.isEdit) {
      let data = {
        isEdit: this.state.isEdit,
        Name: this.state.Name,
        Age: this.state.Age,
        City: this.state.City,
      };
      this.props.myData(data);
      e.preventDefault();
      this.setState({
        Name: "",
        Age: "",
        City: "",
      });
    } else {
      let data = {
        isEdit: this.state.isEdit,
        _id: this.state._id,
        Name: this.state.Name,
        Age: this.state.Age,
        City: this.state.City,
      };
      this.props.myData(data);
    }

    //   console.log(this.state.Name)
  };

  render() {
    return (
      <form onSubmit={this.infoSubmit} autoComplete="off">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            onChange={this.infoChange}
            name="Name"
            value={this.state.Name}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your city"
            onChange={this.infoChange}
            name="City"
            value={this.state.City}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your age"
            onChange={this.infoChange}
            name="Age"
            value={this.state.Age}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          {this.state.isEdit ? "Update" : "Create"}
        </button>
      </form>
    );
  }
}

export default Form;
