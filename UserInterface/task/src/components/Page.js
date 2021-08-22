import React from 'react'
import {NavLink, Route, Switch} from 'react-router-dom';
import {Form, Formik} from 'formik';
export default function Page() {

    const data={
    urs_name:"",
    urs_email:"",
    urs_password:"",
    urs_address:""
}
const onSubmit=(values,props)=>{
    console.log(values)
}

    return (
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Register</h3></div>
                    <div class="card-body">
                        <Formik initialValues={data} onSubmit={onSubmit}>
                            
                            {(props)=>(
                                <Form>
                                <div class="form-group">
                                    <label class="small mb-1" for="inputurs_name">User Name</label>
                                    <input name="urs_name" type="text" placeholder="Enter User Name" />
                                </div>
                                <div class="form-group">
                                    <label class="small mb-1" for="inputurs_emailurs_address">User Email</label>
                                    <input name="urs_email" type="urs_email" placeholder="Enter User Email" />
                                </div>
                                <div class="form-group">
                                    <label class="small mb-1" for="inputurs_password">User Password</label>
                                    <input name="urs_password" type="urs_password" placeholder="Enter User Password" />
                                </div>                           
                                <div class="form-group">
                                    <label class="small mb-1" for="inputurs_address">User City</label>
                                    <select name="urs_address" type="urs_address" placeholder="Select user City"  >
                                        <option  value="Jaipur"  >Jaipur</option>
                                        <option  value="Pune"  >Pune</option>
                                        <option  value="Mumbai"  >Mumbai</option>
                                        <option  value="Chandigarh"  >Chandigarh</option>
                                        <option  value="Goa"  >Goa</option>
                                        <option  value="Banglore"  >Banglore</option>
                                    </select>
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                   
                                     {<a class="btn btn-primary" onClick={onSubmit}  >Submit</a> }
                                </div>
                            </Form>
                            )}
                        </Formik>
                    </div>
                    <div class="card-footer text-center">
                        <div class="small"><a > <NavLink to="/"> already registered ? SignIn</NavLink></a></div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    )
}
