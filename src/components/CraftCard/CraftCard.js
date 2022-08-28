import React from "react";
import "../../App.scss";
import CardItem from "../CardItem/CardItem";

function CraftCard({ jobsList }) {
    const { title, image_link, text } = jobsList;

    return (
        <div className='cards__wrapper' >
            <ul className='cards__items'>
                <CardItem
                src={image_link}
                text={text}
                label={title}
                path='/services/1'
                />
            </ul>
        </div>
    );
}

export default CraftCard;