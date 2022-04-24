import React from 'react';
import "./MainAuthButton.sass";

export default function MainAuthButton() {
    return (
        <div className="mainAuth-component">
            <div className="mainAuth-title">
                Inicia sesión para vivir tu mejor experiencia
            </div>
            <div className="mainAuth-body">
                <button className="button-auth">Iniciar sesión de forma segura</button>
            </div>
        </div>
    );
}