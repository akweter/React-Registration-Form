import React, { Component } from "react";
import axios from "axios";


const Employee = props => (
    <tr>
        <td>{props.employee.firstname}</td>
        <td>{props.employee.lastname}</td>
        <td>{props.employee.telephone}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.location}</td>
        <td>{props.employee.commencement.substring(0,10)}</td>
        <td>{props.employee.department}</td>
    </tr>
);

export default class Adnim extends Component{
    constructor(props){
        super(props);

        this.state = {
            employee: []
        };    
    }

    componentDidMount(){
        axios.get('http://localhost:4000/employee')
        .then(res =>{
            this.setState({
                employee: res.data
            });
        })
        .catch((err) => {
            console.log(err)
        });
    }

    employeeList(){
        return(
            this.state.employee.map(currentemployee => {
                return (<Employee employee={currentemployee} />);
            })
        );
    }
    
    render(){
        return(
            <div>
                <div></div>
                <div>
                    <h3 id="header">Staffs Dashboard</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Telephone</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Commencement</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.employeeList()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
