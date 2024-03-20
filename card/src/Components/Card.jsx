import React from 'react'
import './Card.css';
import { RxLinkedinLogo } from "react-icons/rx";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const userData=[
  {
    fullname:"Yuvaraj",
    description:"Frontend Developer",
    pro:true,
    skills:["C","C++","HTML","CSS","JavaScript","ReactJS"]
  },
  {
    fullname:"Mani Mithran",
    description:"Frontend Developer",
    pro:true,
    skills:["C","C++","HTML","CSS","JavaScript","ReactJS","AWS"]
  },
  {
    fullname:"SureshKumarr",
    description:"Backend Developer",
    pro:true,
    skills:["Node Js","Express Js","Mongo DB"]
  }
]
function User(props){
  return (
    <>
      <div className="card-container">
        <div className="card-image">
           <img src="image1.jpg" alt="image" />
        </div>
        <p className="fullname">{props.fullname}</p>
        

        <p className='description'>{props.description}</p>
        <p className={props.pro?"pro online":"pro offline"}>{props.pro?"ONLINE":"OFFLINE"}</p>
        <button className='message'>Message</button>
        <button className='follow'>Following</button>
        <div className="skills">{props.skills.map((skill,index)=>(
          <li key={index}>{skill}</li>
        ))}
        </div>
        <div className="about">
          <BsTwitterX/>
          <FaInstagram/>
          <FaFacebook/>
          <RxLinkedinLogo/>
        </div>
      </div>
    </>
  )
 
}
function Card () {
  return(
  
  // <User fullname="Daniel Abraham" image="image1.jpg" description="Frontend Developer" pro={true} skills={["HTML","CSS","JavaScript","React JS","Redux","Bootstrap","Node Js","Java"]}/>
<>
  {
  userData.map((user,index)=>(
    <User key={index} fullname={user.fullname} description={user.description} pro={user.pro} skills={user.skills} />
  ))
  }
  </>
   )
}
export default Card;