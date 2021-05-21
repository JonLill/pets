import React, {useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const Create = () => {
    const [formInfo, setformInfo] = useState({
        name:"",
        type:"",
        desc:"",
        skillone:"",
        skilltwo:"",
        skillthree:"",
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e)=>{
        console.log("changing inputs")
        setformInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("submitted")
        axios.post("http://localhost:8000/api/pets/create", formInfo)
        .then(res=>{
            console.log("posting response")
            console.log(res)
            if(res.data.results){
                navigate("/")
            }else{
                setErrors(res.data.errors)
            }
        })

        .catch(err=> console.log("Error Error", err))
    }



    return (
        <div className="container">
            <h1>Know a pet needing a home</h1>
            <Link to= "/">back to home</Link>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Pet Name:</label>
                    {errors.name? <p className="text-danger">{errors.name.message}</p>: ""}
                    <input onChange={changeHandler} type="text" name="name" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Pet type:</label>
                    {errors.type? <p className="text-danger">{errors.type.message}</p>: ""}
                    <input onChange={changeHandler} type="text" name="type" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    {errors.desc? <p className="text-danger">{errors.desc.message}</p>: ""}
                    <input onChange={changeHandler} type="text" name="desc" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Skill 1:</label>
                    {errors.skillone? <p className="text-danger">{errors.skillone.message}</p>: ""}
                    <input onChange={changeHandler} type="text" name="skillone" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Skill 2:(optional)</label>
                    <input onChange={changeHandler} type="text" name="skilltwo" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Skill 3:(optional)</label>
                    <input onChange={changeHandler} type="text" name="skillthree" id="" className="form-control" />
                </div>
                <input type="submit" value="Add Pet" />
            </form>
        </div>
    );
};



export default Create;