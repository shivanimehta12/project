import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios  from 'axios';
import errorHandler from '../utils/functions';
import { set } from 'mongoose';
import { NavLink } from 'react-router-dom';
import { date } from 'joi';

export function ListProduct(props) {
    // var baseUrl = " http://localhost:4000/api/product/allproduct";
    //     // var baseUrl = "http://localhost:3000/jwt/";

    const [product, setProduct] = useState([]);

    useEffect (()=>{
        axios.get('http://localhost:4000/api/product/allproduct').then(
            (res)=>{
                console.log(res.data.data);
                setProduct(res.data.data);
            }
        )

    }, [])

    function doAction(id){
        // var id=e.target.value
         
            axios.delete(`http://localhost:4000/api/product/deleteproduct/${id}`).then(
            (res)=>{
                console.log(res.data.data);


                // window.location.reload(false)
                axios.get('http://localhost:4000/api/product/allproduct').then(
                    (res)=>{
                        console.log(res.data.data);
                        setProduct(res.data.data);
                    }
                )
        
                
            }
        )
       
}

function doUpdate (_id){
    const id = _id;
        props.history.push(`/dashboard/add-product/${id}`);
}
    
    


    var ListProduct = product.map((pt)=>{
        
        return <tr key={pt._id}>
        <td>{pt.prd_name}</td>
        <td>{pt.prd_price}</td>
        <td>{pt.prd_type}</td>
        <td><button onClick={()=>{doUpdate(pt._id)}}>Update</button></td>
        <td><button onClick={()=>{doAction(pt._id)}}>Delete</button> </td>    
            
        </tr>
    })

    return (
        
        <div class="container-fluid">
        <h1 class="mt-4">Tables</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item"><a ><NavLink to="/dashboard">Dashboard</NavLink></a></li>
            <li class="breadcrumb-item active">Tables</li>
        </ol>
     
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table mr-1"></i>
                Product List
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                           {ListProduct}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
   
    )
}

