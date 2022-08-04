import React, { useEffect, useState } from "react";
import axios from 'axios';
import { TextField, MenuItem } from '@mui/material';
import { data } from "./values";

function Update(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [telephone, setTelephone] = useState('');
    const [serial, setSerial] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [commencement, setCommencement] = useState('');
    const [department, setDepartment] = useState('');

    useEffect(() =>{

        axios.get('http://localhost:4000/employee/'+this.props.match.params.id)
        .then((res) =>{
            setFirstname(res.data.firstname);
            setLastname(res.data.lastname);
            setTelephone(res.data.telephone);
            setSerial(res.data.serial);
            setEmail(res.data.email);
            setLocation(res.data.location);
            setCommencement(res.data.commencement);
            setDepartment(res.data.department);
            console.log( 'document is mounted!', res.data);
        })
        .catch(err => console.log(err));
    },[]);

    const handleFirstname=(b)=>{
        const firstname = b.target.value;
        setFirstname(firstname);
    }

    const handleLastname=(c)=>{
        const lastname = c.target.value;
        setLastname(lastname);
    }

    const handleTelephone=(d)=>{
        const telephone = d.target.value;
        setTelephone(telephone);
    }

    const handleId=(e)=>{
        const serial = e.target.value;
        setSerial(serial);
    }

    const handleEmail=(f)=>{
        const email = f.target.value;
        setEmail(email);
    }

    const handleLocation=(g)=>{
        const location = g.target.value;
        setLocation(location);
    }

    const handleCommencement=(date)=>{
        const commencement = date.target.value;
        setCommencement(commencement);
    }

    const handleDepartment=(i)=>{
        const department = i.target.value;
        setDepartment(department);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();

        const employee =()=>[{
            firstname: 'james', lastname:'Henry',telephone:53453343,serial:'hier8ytr',email:'james@me.com',
            location:'tema',commencement:'2022-06-14T00:00:00.000Z', department:'Networking'
            
        }]/*[ 
            firstname, lastname, telephone, serial,
            email, location, commencement, department
        ]*/

        axios.post('http://localhost:4000/employee/update/'+this.props.param.id, employee)
        .then(res => console.log('Posting Data', res.data))
        .catch(err => console.log(err));

        console.log(employee);
        window.localStorage.setItem('data',employee);
        //window.location = '/admin';
    }


    return(
        <div className="row">
            <div className="col-md-2"></div>
                <div className="col col-md-8">
                    <h2>Edit {firstname}'s Data</h2><br />
                    <form onSubmit={handleSubmit} >
                        
                        <div className="form-group">
                            <label>Surname:</label>
                            <input 
                            type="text"
                            required
                            placeholder="Akweter"
                            className="form-control"
                            value={firstname}
                            onChange={handleFirstname}/>
                        </div>
                        <div className="form-group">
                            <label>Lastname:</label>
                            <input 
                            type="text"
                            required
                            placeholder="James"
                            className="form-control"
                            value={lastname}
                            onChange={handleLastname}/>
                        </div>
                        <div className="form-group">
                            <label>Telephone:</label>
                            <input 
                            type="tel"
                            placeholder="Eg: +233 5405 44760"
                            required
                            className="form-control"
                            value={telephone}
                            onChange={handleTelephone}/>
                        </div>
                        <noscript className="form-group">
                            <label>ID Number:</label>
                            <input 
                            type="text"
                            required
                            placeholder="G45H78340FS"
                            className="form-control"
                            value={serial}
                            onChange={handleId}/>
                        </noscript>
                        <div className="form-group">
                            <label>Email:</label>
                            <input 
                            type="email"
                            required
                            placeholder="example@mail.com"
                            className="form-control"
                            value={email}
                            onChange={handleEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Location:</label>
                            <input 
                            type="text"
                            required
                            placeholder="Ablekuma - Accra"
                            className="form-control"
                            value={location}
                            onChange={handleLocation}/>
                        </div>
                        <div className="form-group">
                            <div>
                                <label>Date:</label><br />
                                <input
                                    type="text"
                                    className="form-control"       
                                    value={commencement}
                                    onChange={handleCommencement}/>
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
                                value={department}
                                onChange={handleDepartment}>
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
            <div className="col-md-2"></div>
        </div>
        
    );
}
export default Update;
