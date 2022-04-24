import React from "react";
import { Component } from "react";
import "./NavigationBar.sass";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
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
        <div className="navigation-bar-language">
          <select className="language-button"></select>
        </div>
        <div className="navigation-bar-account">
          <div className="account-textOne">Hola, Identifícate</div>
          <div className="account-textTwo">Cuenta y Listas</div>
        </div>
        <div className="navigation-bar-returns">
          <div className="returns-textOne">Devoluciones</div>
          <div className="returns-textTwo">y Pedidos</div>
        </div>
        <div className="navigation-bar-cart">
          <div className="cart-icon"></div>
          <div className="cart-number">0</div>
          <div className="cart-text">Carrito</div>
        </div>
        </div>
        <div className="navigation-bar-footer">
          <div className="footer-list">
            <img className="list-icon"></img>
            <div className="list-text">Todo</div>
          </div>
          <div className="footer-list">
            <button className="text-button-list">Ofertas del Día</button>
          </div>
          <div className="footer-list">
          <button className="text-button-list">Servicio al Cliente</button>
          </div>
          <div className="footer-list">
          <button className="text-button-list">Listas</button>
          </div>
          <div className="footer-list">
          <button className="text-button-list">Tarjetas de Regalo</button>
          </div>
          <div className="footer-list">
          <button className="text-button-list">Vender</button>
          </div>
        </div>
      </div>
      
    );
  }
}
