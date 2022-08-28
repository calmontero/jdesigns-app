import React, { useState, useEffect } from "react";
import "../../App.scss";
//import CardItem from "../CardItem/CardItem";
import { BASE_URL } from "../../constraints";
import CraftCard from "../CraftCard/CraftCard";

function CraftJobs() {
    const [job, setJobs] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "/jobs")
        .then((response) => response.json())
        .then((jobsData) => setJobs(jobsData));
    }, []);

    return (
        <div className='cards'>
            <h1>Revisa nuestros trabajos !!!</h1>
            <div className='cards__container'>
            {
                job && job.map((j) => {
                    return <CraftCard jobsList={j}  />
                })
            }
            </div>
        </div>
    );
}

export default CraftJobs;