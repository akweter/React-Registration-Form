import React, { Component } from "react";
import axios from 'axios';
import { TextField, Stack, Autocomplete, MenuItem, Input, FilledInput, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { data } from "./values";
import { Link } from "react-router-dom";


export default class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telephone: '',
            serial: '',
            email: '',
            location: '',
            commencement: new Date(),
            department: '',
            users: []
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handleCommencement = this.handleCommencement.bind(this);
        this.handleFirstname = this.handleFirstname.bind(this);
        this.handleLastname = this.handleLastname.bind(this);
        this.handleTelephone = this.handleTelephone.bind(this);
        this.handleId = this.handleId.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleDepartment = this.handleDepartment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
        axios.get('http://localhost:4000/employee/')
        .then((res) =>{
                this.setState({
                    users: res.data.map(user => user.firstname || user.lastname),
                    username: res.data.username
                });
            })
    }

    handleUsername(a){
        this.setState({
            username: a.target.value
        });
    }

    handleFirstname(b){
        this.setState({
            firstname: b.target.value
        });
    }

    handleLastname(c){
        this.setState({
            lastname: c.target.value
        });
    }

    handleTelephone(d){
        this.setState({
            telephone: d.target.value
        });
    }

    handleId(e){
        this.setState({
            serial: e.target.value
        });
    }

    handleEmail(f){
        this.setState({
            email: f.target.value
        });
    }

    handleLocation(g){
        this.setState({
            location: g.target.value
        });
    }

    handleCommencement(date){
        this.setState({
            commencement: date.target.value,
        });
    }

    handleDepartment(i){
        this.setState({
            department: i.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();

        const employee = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            telephone:  this.state.telephone,
            serial: this.state.serial,
            email: this.state.email,
            location: this.state.location,
            commencement: this.state.commencement,
            department: this.state.department
        }

        axios.post('http://localhost:4000/employee/add', employee)
        .then(res => console.log(res.data));

        window.location = '/submit';
    }

    render(){

        return(
            <div className="row">
                    <div className="col-md-7">
                        <h2 id="header">Employees Registration Form</h2><br />
                        <form onSubmit={this.handleSubmit} >
                            
                            <div className="form-group">
                                <label>Surname:</label>
                                <input 
                                type="text"
                                required
                                placeholder="Akweter"
                                className="form-control"
                                value={this.state.firstname}
                                onChange={this.handleFirstname}/>
                            </div>
                            <div className="form-group">
                                <label>Lastname:</label>
                                <input 
                                type="text"
                                required
                                placeholder="James"
                                className="form-control"
                                value={this.state.lastname}
                                onChange={this.handleLastname}/>
                            </div>
                            <div className="form-group">
                                <label>Telephone:</label>
                                <input 
                                type="tel"
                                placeholder="Eg: +233 5405 44760"
                                required
                                className="form-control"
                                value={this.state.telephone}
                                onChange={this.handleTelephone}/>
                            </div>
                            {/*<div className="form-group">
                                <label>ID Number:</label>
                                <input 
                                type="text"
                                required
                                placeholder="G45H78340FS"
                                className="form-control"
                                value={this.state.serial}
                                onChange={this.handleId}/>
                            </div>*/}
                            <div className="form-group">
                                <label>Email:</label>
                                <input 
                                type="email"
                                required
                                placeholder="example@mail.com"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Location:</label>
                                <input 
                                type="text"
                                required
                                placeholder="Ablekuma - Accra"
                                className="form-control"
                                value={this.state.location}
                                onChange={this.handleLocation}/>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label>Date:</label><br />
                                    <input
                                        type="date"       
                                        value={this.state.commencement}
                                        onChange={this.handleCommencement}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Specialization:</label>
                                <br />
                                <TextField
                                    select
                                    required
                                    className="form-control"
                                    label="Web Development"
                                    value={this.state.department}
                                    onChange={this.handleDepartment}>
                                    {
                                    data.map((all) => (
                                        <MenuItem key={all} value={all}>
                                            {all}
                                        </MenuItem>))
                                    }
                                </TextField>
                            </div>
                            <p />
                            <button type="submit" name="submit-btn" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    <div id="search-row" className="col-md-5">
                            <form>
                            <h2>Search</h2>
                                <select itemRef="userInput"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.handleUsername}>
                                        {
                                        this.state.users.map((user) =>{
                                            return(
                                                <option key={user}>{user}</option>
                                            );
                                        })
                                    }
                                </select>
                                < p/>
                                <Link to="/dashboard">
                                <Button variant="contained" endIcon={<SearchIcon />} type="submit" name="submit-btn">Querry</Button>
                                </Link>
                            </form>
                    </div>
                </div> 
        );
    }
}
