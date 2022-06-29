import React from "react";
import "../../App.scss";
//import { Row, Col } from 'react-bootstrap';
import CardItem from "../CardItem/CardItem";

function CraftJobs() {
    return (
        <div className='cards'>
            <h1>Revisa nuestros trabajos !!!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='https://i.ibb.co/qmTrQ2m/Sample-01.png'
                        text='Dale un toque unico a tus celebraciones'
                        label='Caketoppers'
                        path='/services/1'
                        />
                        <CardItem
                        src='https://i.ibb.co/1bbBJ8Y/Sample-02.png'
                        text='Vestimenta personalizada'
                        label='Vestimenta'
                        path='/services/2'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='https://i.ibb.co/551ksvr/Sample-04.png'
                        text='Decoraciones personalizadas'
                        label='Adornos'
                        path='/services/3'
                        />
                        <CardItem
                        src='https://i.ibb.co/TqRNTT4/Sample-03.png'
                        text='Vasos y Tazas personalizados'
                        label='Tazas y Vasos'
                        path='/services/4'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CraftJobs;