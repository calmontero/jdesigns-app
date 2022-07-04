import React from "react";
import "../../App.scss";

function CraftSection() {
    return (
        <div className="craft-container">
            <video src='/videos/Video-01.mp4' autoPlay loop muted />
            <h1>Bienvenidos a JDesigns</h1>
            <span>Papelería creativa para tus eventos, artículos personalizados franelas, tazas, vasos y mucho más...</span>
        </div>
    );
}

export default CraftSection;