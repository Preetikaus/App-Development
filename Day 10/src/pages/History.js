import React from "react";
import '../assets/css/Upcoming.css';
import Layout from "../components/Layout";

function ReactTable(){
    const data=[
        {
        date : "20/06/2020",
        time : "10:00 AM",
        appointID : "657283213",
        payment: "UPI",
    },
        {
            date : "20/07/2020",
            time : "2:00 PM",
            appointID : "76768543",
            payment: "CARD",
    },
        {
            date : "20/08/2020",
            time : "10:30 AM",
            appointID : "782254367",
            payment: "CASH",
    },
        {
            date : "20/10/2020",
            time : "12:00 PM",
            appointID : "90587656",
            payment: "UPI",
    },
        {
            date : "20/11/2020",
            time : "01:45 PM",
            appointID : "345326374",
            payment: "CARD",
    },
        {
            date : "20/12/2020",
            time : "10:00 AM",
            appointID : "76182314",
            payment: "UPI",
    },
        {
            date : "20/07/2020",
            time : "2:00 PM",
            appointID : "76078543",
            payment: "CARD",
    },
        {
            date : "20/12/2020",
            time : "10:00 AM",
            appointID : "76382314",
            payment: "UPI",
    },
        {
            date : "20/10/2020",
            time : "12:00 PM",
            appointID : "90887656",
            payment: "UPI",
    },
        {
            date : "20/08/2020",
            time : "10:30 AM",
            appointID : "78544367",
            payment: "CASH",
    },
        {
            date : "20/07/2020",
            time : "2:00 PM",
            appointID : "76789543",
            payment: "CARD",
    },
        {
            date : "20/08/2020",
            time : "10:30 AM",
            appointID : "78548367",
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