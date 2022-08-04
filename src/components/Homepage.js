import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class Home extends Component{
    render(){

        return(
            < div>
                <i className="row">
                        <h1>Welcome to Persol Systems Limited</h1>
                        <p />
                        < p />
                    <div className="col-md-9">
                        <p>All new aplicants must make sure to provide their details.</p>
                    </div>
                    <div className="col-md-10 offset-4">
                        <p>Click <kbd> <Link to='/form'> here</Link></kbd> to submit your informations</p>
                    </div>
                </i>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9x93QN1NF9OsFTvgHIBLd7KUM1B8fkVTwpA&usqp=CAU" width="100%" height="300px" alt="persol-system-logo" />
            </div>
        );
    }
}