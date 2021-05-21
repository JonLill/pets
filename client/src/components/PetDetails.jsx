import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const PetDetails = (props) => {
    const [petInfo, setPetInfo] = useState({})
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res=>{
                console.log(res)
                setPetInfo(res.data.results)
            })
            .catch(err=> console.log(err))
    },[])
    
    const deleteClickHandler = ()=>{
        axios.delete(`http://localhost:8000/api/pets/delete/${props.id}`)
        .then(res=>{
            console.log("**********")
            console.log(res)
            console.log("**********")
            navigate("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    
    return (
        <div>
            <h1>Details about: {petInfo.name}</h1>
            <Link to= "/"> back to home</Link>
            <h2>Pet Type: {petInfo.type}</h2>
            <h3>Description: {petInfo.desc}</h3>
            <h4>Skills:</h4>
            <p>{petInfo.skillone}</p>
            <p>{petInfo.skilltwo}</p>
            <p>{petInfo.skillthree}</p>
            <button onClick = {deleteClickHandler} className="btn-primary">Adopt {petInfo.name}</button>
        </div>
    );
};


export default PetDetails;