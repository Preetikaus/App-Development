import React from "react";
import '../assets/css/Upcoming.css';
import Layout1 from "../components/Layout1";

function Users(){
    const data=[
        {
        name : "Lisa",
        email : "lisa78@gmail.com",
    },
        {
            name : "Meera",
            email : "lisa78@gmail.com",
    },
        {
            name : "Sana",
            email : "lisa78@gmail.com",
    },
        {
            name : "Lisa",
            email : "lisa78@gmail.com",
    },
        {
            name : "Lisa",
            email : "lisa78@gmail.com",
    },
        {
            name : "Lisa",
            email : "lisa78@gmail.com",
    },
        {
            name : "Lisa",
            email : "lisa78@gmail.com",
    },
        {
            name : "Lisa",
            email : "lisa78@gmail.com",
    },
        {
            name : "Lisa",
            email : "lisa78@gmail.com",
    },
        {
            name : "Lisa",
            email : "lisa78@gmail.com",
    },
        {
            name : "Lisa",
            email : "lisa78@gmail.com",
    },
        {
            name : "Lisa",
            email : "lisa78@gmail.com",
    },
]

    return(
        <>
        <Layout1/>
        <div className="table1">
           <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                   data.map((val,i)=>
                   <tr key={i}>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                   </tr>
                   ) 
                }
            </tbody>
           </table>
        </div>
        </>
    );
}
export default Users;