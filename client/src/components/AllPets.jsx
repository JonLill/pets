import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "@reach/router";



const AllPets = () => {
    const [pets, setPets] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
        .then(res=>{
            console.log(res)
            setPets(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [])




    return (
        <div>
            <h4>These Pets are looking for a good home</h4>
            <Link to= "/pets/new">Add a pet to the shelter</Link>
            {
                pets.map((pet, i)=>{
                    return <div key={i} className="card">
                        <div className="card-body">
                            <h4 className="card-title">Name: {pet.name}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Type: {pet.type}</h6>
                            <Link to = {`/pets/${pet._id}`} className="card-link">Details</Link>
                            <Link to = {`/pets/edit/${pet._id}`} className="card-link text-danger">Edit</Link>
                        </div>
                    </div>
                })
            }
        </div>
    );
};


export default AllPets;