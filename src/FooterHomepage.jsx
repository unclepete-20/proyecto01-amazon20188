import React from "react";
import { Component } from "react";
import "./FooterHomepage.sass";


export default class FooterButton extends Component {
    render() {
        return (
            <div className="footer-home-page">
                <div className="footer-home-page-button-layout">
                    <div className="footer-button-text">Ver recomendaciones personalizadas</div>
                    <button className="footer-button">Identifícate</button>
                    <div className="footer-bottom-text-button">¿Eres un cliente nuevo? <a href="#">Empieza aquí.</a></div>
                </div>
                <div className="home-begin-layout">
                    <div className="home-begin-text">Inicio de Página</div>
                </div>
            </div>
        );
    }
}