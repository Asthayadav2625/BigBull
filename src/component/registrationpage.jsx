import React, { useState } from "react";
import back from  '../Assets/bigbullimage.jpg';
const Registrationpage=()=>{

    const[formdata,setfromData]=useState({
        username:'',
        email:'',
        phone:'',
        password:''

    });
    //Handle input change
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setfromData({
            ...formdata,
            [name]:value
        });
    };
    //handle default submission
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted:",formdata);
    };

    return (
        <>
         <div>
            <div className="flex justify-center m-10 p-10">
                <img src={back} alt="background" className="w-[800px] bg-opacity-50"></img>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="">
                    <div>
                        <label>Username:</label>
                        <input 
                        type="text" id="username"
                        name="username"
                        value={FormData.username}
                        onChange={handleChange}>

                        </input>
                    </div>

                    <div>
                        <label htmlFor="phone" className="">Phone Number:</label>
                         
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={FormData.phone}
                        onChange={handleChange}
                        className=""/>
                    </div>
                    <div>
                        <label htmlFor="email" className="">Email:</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        value={FormData.email}
                        onChange={handleChange}
                        className=""/>

                    </div>

                    <div>
                        <label htmlFor="password" className="">Password:</label>
                        <input 
                        type="password"
                        id="password"
                        name="password"
                        value={FormData.password}
                        onChange={handleChange}
                        className=""/>

                    </div>
                    <button type="submit"
                    className="">Submit</button>
                </form>
            </div>
         </div>
        </>
    );
}

export default Registrationpage;