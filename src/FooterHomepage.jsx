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
                <div className="footer-second-button-layout">
                    <div className="footer-second-button-img"></div>
                    <button className="footer-second-button1">Español</button>
                    <button className="footer-second-button2">USD-dolar estadounidense</button>
                    <button className="footer-second-button3">Estados Unidos</button>
                </div>
                <div className="footer-info-layout">
                    <div className="footer-info-text">Condiciones de uso</div>
                    <div className="footer-info-text">Aviso de privacidad</div>
                    <div className="footer-info-text">Anuncios basados en intereses</div>
                    <div className="footer-info-text">© 1996-2022 Amazon.com, Inc. o sus afiliados</div>
                    <div className="footer-info-text">Pedro Arriola (20188)</div>
                </div>
            </div>
        );
    }
}