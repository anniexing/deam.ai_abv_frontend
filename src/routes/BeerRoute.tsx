import { Route, Routes } from "react-router-dom";
import Beers from "../components/Beer/Beers";
import Beer from "../components/Beer/Beer";
import React from "react";

const BeerRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Beers />}/>
            <Route path="/beer/:id" element={<Beer />} />
        </Routes>
    )
}

export default BeerRoute;
