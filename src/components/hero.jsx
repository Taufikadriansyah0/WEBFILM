import React from "react";
import { Button } from "react-bootstrap";


function NamaFunction() {
    return (
        <>
        <div className="h-100 tengah d-flex flex-column " id="home">
            <h1 className="text-white text-center">NONTON FILM</h1><br/>
            <h1 className="text-white text-center">GRATIS HANYA DISINI</h1><br/>
            <Button href="#film" variant="danger">NONTON</Button>
        </div>
        </>
    )
}

export default NamaFunction;