import React from "react";
import '../assets/css/Upcoming.css';
import Layout from "../components/Layout";

function ReactTable(){
    const data=[
        {
        date : "20/06/2021",
        time : "10:00 AM",
        appointID : "65728313",
        payment: "UPI",
    },
        {
            date : "20/07/2021",
            time : "2:00 PM",
            appointID : "7678543",
            payment: "CARD",
    },
        {
            date : "20/08/2021",
            time : "10:30 AM",
            appointID : "7854367",
            payment: "CASH",
    },
        {
            date : "20/10/2021",
            time : "12:00 PM",
            appointID : "9087656",
            payment: "UPI",
    },
        {
            date : "20/11/2021",
            time : "01:45 PM",
            appointID : "34526374",
            payment: "CARD",
    },
        {
            date : "20/12/2021",
            time : "10:00 AM",
            appointID : "7682314",
            payment: "UPI",
    },
        {
            date : "20/07/2021",
            time : "2:00 PM",
            appointID : "7678543",
            payment: "CARD",
    },
        {
            date : "20/12/2021",
            time : "10:00 AM",
            appointID : "7682314",
            payment: "UPI",
    },
        {
            date : "20/10/2021",
            time : "12:00 PM",
            appointID : "9087656",
            payment: "UPI",
    },
        {
            date : "20/08/2021",
            time : "10:30 AM",
            appointID : "7854367",
            payment: "CASH",
    },
        {
            date : "20/07/2021",
            time : "2:00 PM",
            appointID : "7678543",
            payment: "CARD",
    },
        {
            date : "20/08/2021",
            time : "10:30 AM",
            appointID : "7854367",
            payment: "CASH",
    },
]

    return(
        <>
        <Layout/>
        <div className="table1">
           <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Appointment ID</th>
                    <th>Payment</th>
                </tr>
            </thead>
            <tbody>
                {
                   data.map((val,i)=>
                   <tr key={i}>
                    <td>{val.date}</td>
                    <td>{val.time}</td>
                    <td>{val.appointID}</td>
                    <td>{val.payment}</td>
                   </tr>
                   ) 
                }
            </tbody>
           </table>
        </div>
        </>
    );
}
export default ReactTable;