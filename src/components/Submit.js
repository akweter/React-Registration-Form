import React from "react";
import { Link } from 'react-router-dom';

export default function Submit(){

    return(
        <>
        <h2>Form Submitted!</h2>
        <p>Thank you for submission</p>
        < br />< p />< br />
        <h5>Submit another form here: <br /><Link to="/form"> <button type="submit" className="btn btn-warning ">Click</button></Link></h5>
        </>
    );
}