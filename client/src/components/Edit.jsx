import React, {useEffect, useState} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
    const [petInfo, setPetInfo] = useState({
        name:"",
        type:"",
        desc:"",
        skillone:"",
        skilltwo:"",
        skillthree:"",
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res=>{
                console.log(res)
                setPetInfo(res.data.results)
            })
            .catch(err=> console.log(err))
    },[] )

    const updateInfo = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, petInfo)
            .then(res=>{
                console.log(res)
                navigate("/")
            })
            .catch(err=> console.log(err))
    }

    const changeHandler = (e)=>{
        setPetInfo({
            ...petInfo,
            [e.target.name]:e.target.value
        })
    }
    
    
    
    
    
    
    return (
        <div>
            <h2>Edit {petInfo.name} </h2>
            <Link to= "/">back to home</Link>
            <form onSubmit={updateInfo}>
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="" value={petInfo.name} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Pet type:</label>
                    <input onChange={changeHandler} type="text" name="type" id="" value={petInfo.type} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input onChange={changeHandler} type="text" name="desc" id="" value={petInfo.desc} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Skill 1:</label>
                    <input onChange={changeHandler} type="text" name="skillone" id="" value={petInfo.skillone} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Skill 2:(optional)</label>
                    <input onChange={changeHandler} type="text" name="skilltwo" id="" value={petInfo.skilltwo} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Skill 3:(optional)</label>
                    <input onChange={changeHandler} type="text" name="skillthree" id="" value={petInfo.skillthree} className="form-control" />
                </div>
                <input type="submit" value="Edit Pet" />
            </form>
        </div>
    );
};


export default Edit;