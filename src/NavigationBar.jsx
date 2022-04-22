import React from "react";
import { Component } from "react";
import "./NavigationBar.sass";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className="logo-placeholder"></div>
        <div className="navigation-bar-location">
          <div className="location-placeholder-image"></div>
          <div className="location-placeholder-textAux">Enviar a</div>
          <div className="location-placeholder-text">Guatemala</div>
        </div>
        <div className="navigation-bar-search">
          <div className="search-dropdown">
            <select className="form-control">
              <option value="Todos">Todos</option>
              <option value="Computadoras">Computadoras</option>
              <option value="Libros">Libros</option>
              <option value="Equipaje">Equipaje</option>
              <option value="Electronicos">Electronicos</option>
              <option value="Videojuegos">Videojuegos</option>
            </select>
          </div>
          <div className="search-placeholder-text">
            <input type="text" className="search-text-input" />
          </div>
          <div className="search-button">
            <button className="search-button-icon"></button>
          </div>
        </div>
      </div>
    );
  }
}
