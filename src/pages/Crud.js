import React, { Component } from "react";
import Formulir from "../components/Formulir";

import NavbarComponent from "../components/NavbarComponent";
import Tabel from "../components/Tabel";

export default class Crud extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel />
          <Formulir />
        </div>
      </div>
    );
  }
}
