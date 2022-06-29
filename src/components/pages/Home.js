import React from "react";
import "../../App.scss";
import CraftJobs from "../CraftJobs/CraftJobs";
import CraftSection from "../CraftSection/CraftSection";
import Footer from "../Footer/Footer";

function Home() {
    return (
        <>
            <CraftSection />
            <CraftJobs />
            <Footer />
        </>
    );
}

export default Home;