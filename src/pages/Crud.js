import React, { Component } from "react";
import Formulir from "../components/Formulir";

import NavbarComponent from "../components/NavbarComponent";
import Tabel from "../components/Tabel";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      makanans: [
        ...this.state.makanans,
        {
          id: this.state.makanans.length + 1,
          nama: this.state.nama,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga,
        },
      ],
    });
    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel makanans={this.state.makanans} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
