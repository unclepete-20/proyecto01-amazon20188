import React from 'react';
import "./AdOneComponent.sass";

export default function AdOneComponent(props) {
    return (
        <div className="one-component">
            <div className="one-title">
                {props.title}
            </div>
            <div className="one-body">
                <img src={props.img} width="300px"></img>
            </div>
            <div className="one-footer">
                <a className="link" href={props.url}>Ver más</a>
            </div>
        </div>
    );
}